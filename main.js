
// tirar una alerta
alert("hola soy Priscila");
// variable y modifico la variable 
let nombre ="priscila";
nombre="agustin";

// constante
const apellido = "alori";
// variable
let altura = 180;

// se ve la constante o variable en la consola
console.log(nombre);
console.log(altura);
console.log(apellido);
let concatenacion = nombre + " " + apellido; 
//concatenacion
let datos = document.querySelector("#datos");
datos.innerHTML =`<hr/>
<h1>hola otra vez </h1>
<h2> mi nombre es ${concatenacion}</h2>`

// condicion
if(altura >= 185){
    datos.innerHTML += "<h1> sos una persona alta</h1>";
}else{
    datos.innerHTML += "<h1> no sos una persona alta</h1>"
}


// bucle
// el bucle se repite siempre que se cumpla la condicion.
for(let year = 2000; year <= 2023; year ++){
datos.innerHTML +=` <h2>estamos en el año: ${year}</h2>` ;
}


// arrays 

let nombres = ["priscila", "agustin", "ivan" ];

let divNombres = document.querySelector ("#nombres");

//divNombres.innerHTML = nombres [1];

// listado de nombres.

divNombres.innerHTML= "<h1>listado de nombres</h1><ul>";
     //nombres.forEach(nombre => {

      //  divNombres.innerHTML += "<li>" + nombre + "</li>"
   // });

    for (let nombre of nombres)  {
        divNombres.innerHTML += "<li>" + nombre + "</li>";
    }

    divNombres.innerHTML += "</ul>";


    // pregunar acerca de las comillas. lo hice pero no entiendo como.


    //funciones

    const miInformacion =(nombre,) => {
        let misDatos = `
        <hr/>
        <h1>hola otra vez </h1>
        <h2> mi nombre es ${nombre}</h2>`;

        return misDatos;

    }
// console.log( miInformacion("agustin"));

// otra vez no hice sin intender como. 
const imprimir = () => {

    let datos = document.querySelector("#datos");
    datos.innerHTML = miInformacion ("agustin");

}
imprimir ();
