function consultarPublicaciones(callback){
    fetch("https://jsonplaceholder.typicode.com/posts").then((r)=>{
        console.log("Termine de obtener los posts")
        callback(r)
    })
}

function terminarPrograma(pubs){
    
}

//Aqui inicia 
console.log("Inicia la ejecucion");
consultarPublicaciones((pubs) => { console.log(pubs); console.log("Finaliza la ejecucion"); })
