// variables
const listaTweets = document.getElementById('lista-tweets')

// Event Listeners
eventListeners()

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)
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
}