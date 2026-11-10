/**
 * Obtiene los ingredientes de la receta para mandarlos a cortar
 * despues ejecuta la funcion que recibe en el callback
 * 
 * Todo esto con el tiempo que se le establece dentro del setTimeout que
 * hace que espere para poder ejecutar las instrucciones 
 * @param {*} ingredientes 
 * @param {*} callback 
 */
function cortarIngredientes(ingredientes, callback){
    setTimeout(()=>{
        console.log(`Cortando: ${ingredientes}`);
        callback();
    }, 2500);
}

/**
 * Obtiene los ingredientes de la receta para mandarlos a cocinar
 * despues ejecuta la funcion que recibe en el callback
 * 
 * Todo esto con el tiempo que se le establece dentro del setTimeout que
 * hace que espere para poder ejecutar las instrucciones 
 * @param {*} accion 
 * @param {*} callback 
 */
function cocinar(accion, callback){
    setTimeout(()=>{
        console.log(`Cocinando: ${accion}`);
        callback();
    }, 3000);
}

/**
 * Manda el mensaje de que el usuario finalmente puede disfrutar de su plato
 * @param {*} plato 
 */
function servirPlato(plato){
    console.log(`Listo puedes disfrutar de ${plato}`)
}

/**
 * Esta funcion hace el llamado principal de la funcion junto con sus callbacks
 * de manera que las funciones se ejecuten de manera ordenada a como es que se 
 * espera
 * @param {*} plato 
 * @param {*} callback 
 */
function prepararReceta(plato, callback){
    console.log(`Iniciamos la preparacion de ${plato}`);

    cortarIngredientes("Vegetales", ()=>{
        cocinar("saltear", ()=>{
            cortarIngredientes("Pollo", ()=>{
                cocinar("Freir", ()=>{
                    cocinar("Mezclar todo", ()=>{
                        servirPlato(plato);
                        callback();
                    })
                })
            })
        })
    })
}

/**
 * Se llama a la funcion prepararReceta para empezar con el proceso de la creacion de la receta 
 */
prepararReceta("Pollo al wok", ()=>{console.log("Receta completa")})