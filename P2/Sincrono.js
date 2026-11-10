
/**
 * Dentro de esta funcion se hace un callback que es la referencia a la funcion de flecha que le 
 * mandamos a esta funcion dentro de los ultimos mensajes
 * @param {*} callback 
 */
function consultarPublicaciones(callback){
    fetch("https://jsonplaceholder.typicode.com/posts").then((r)=>{
        console.log("Termine de obtener los posts")
        callback(r)
    })
}

/**
 * Esta funcion nos ayuda a saber cuando es que termina nuestro programa
 */
function terminarPrograma(pubs){
    
}

//Aqui inicia 
/**
 * Desde esta parte es donde hacemos la ejecucion de la funcion llamada consultarPublicaciones la cual posee una funcion 
 * de flecha que imprime los posts que recibe, y como resultado final lanza el mensaje de Finaliza la ejecucion
 */
console.log("Inicia la ejecucion");
consultarPublicaciones((pubs) => { console.log(pubs); console.log("Finaliza la ejecucion"); })
