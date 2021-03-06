// Variables
const listaTweets = document.getElementById('lista-tweets')

// Event Listeners
eventListeners()
function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet)

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo)
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

// Borramos el tweet de la lista del documento
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className == "borrar-tweet") {
        console.log(e.target.parentElement)
        e.target.parentElement.remove()
        console.log(e.target.parentElement.textContent)
        borrarTweetLocalStorage(e.target.parentElement.textContent)
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

// Comprobar que hay elementos en localstorage, retorna un arreglo
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

function localStorageListo(){
    let tweets;
    tweets = obtenerTweetsLocalStorage()
    console.log(tweets)
    tweets.forEach(function(tweet){
        // crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet'
        botonBorrar.innerText = 'X'
        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li')
        li.innerText = tweet
        // añade el boton de borrar al tweet
        li.appendChild(botonBorrar)
        // añade el tweet a la lista
        listaTweets.appendChild(li)
    })
}

// Eliminar tweet de local storage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    console.log(tweet)
    // Elimina la x del tweet
    tweetBorrar = tweet.substring( 0, tweet.length -1 )
    console.log(tweetBorrar)
    tweets = obtenerTweetsLocalStorage();
    console.log(tweets)
    tweets.forEach(function( tweet, index ) {
        console.log(tweet)
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets))
}