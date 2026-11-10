const numeros = [1,2,3,4,5];

const dobles = numeros.map(n => n*2);

console.log(numeros);
console.log(dobles);

const elementosLista = numeros.map(n=> `<li>Numero: ${n}</li>`)

console.log(elementosLista.join(""))

const usuario = {
    nombre: "Ramses Norberto",
    edad: 20,
    hobbies: ["Natacion", "Videojuegos", "Ver peliculas"],
    direccin: {
        calle: "Ignacio Comonfort",
        numero: "67",
        lat: 0,
        lng: 0
    },
    saludar: function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
    }
}

let x = 18;

function puerta(x){

    if(x => 18 && x < 40){
        console.log("Puede pasar");
        return;
    }
    
    if(x >= 40){
        console.log("Vayase a dormir viejo")
        return;
    }else{
        console.log("No puede pasar");
    }

}

let dia = 1;

switch(dia){
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miercoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sabado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("No es ni lunes ni martes ni ningun dia de la semana.");
}

//for in recorre las llaves de un objeto
for(const llave in usuario){
    console.log(`${llave} = ${usuario[llave]}`)
}

//For of recorre los elementos de un arreglo
for (const hobbie of usuario.hobbies) {
    console.log(hobbie)
}

//Para el for normal
for(let i = 0; i < usuario.hobbies.length; i++){
    console.log(usuario.hobbies[i]);
}
