// Variables
const listaTweets = document.getElementById('lista-tweets')

// Event Listeners
eventListeners()
function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet)
}

// Funciones
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'
    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li')
    li.innerText = tweet
    // añade el boton de borrar al tweet
    li.appendChild(botonBorrar)
    // añade el tweet a la lista
    listaTweets.appendChild(li)

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet)
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == "borrar-tweet") {
        console.log("Diste click en eliminar")
        console.log(e.target.parentElement)
        e.target.parentElement.remove()
        alert("Tweet Eliminado")
    }
}

// Agregamtweet a local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage()
    // Añadir el nuevo tweet
    tweets.push(tweet)
    // convertir de string a arreglo para local storage
    localStorage.setItem( 'tweets', JSON.stringify(tweets) )
}

function obtenerTweetsLocalStorage(){
    let tweets;
    // revisamos los valores de local storage
    if (localStorage.getItem('tweets') === null ) {
        tweets = [];
    } else {
        tweets = JSON.parse( localStorage.getItem('tweets') )
    }
    return tweets;
}