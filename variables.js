
let nombre = 'Irving';
let apellido = 'Martinez';
let username = 'irving10';
let edad = 23;
let mail = 'irving@hotmail.com';
let isMayorDeEdad= true;
let dineroAhorrado = 1000;
let deudas = 100;

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;


//Funciones
function nombreCompletoFunction (name, lastName){
    return name + ' ' + lastName;
};
function saludo(name, lastName, nickName) {
    const completeName = nombreCompletoFunction(name, lastName, userName);
    console.log("Mi nombre es "+ completeName+ ", pero prefiero que me digas "+ username+".");
}


//Condicionales
const tipodeSuscripcion = "Basic";
switch (tipodeSuscripcion) {

    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("Tú y alguien más puede tomar TODOS los cursos de Platzi durante un año");
        break;
}

//Lo mismo de arriba pero ahora utilizando if, else y else if

let tipodeSuscripcionIF = "Free";

if (tipodeSuscripcionIF === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipodeSuscripcionIF === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipodeSuscripcionIF == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipodeSuscripcionIF === "ExpertDuo"){
    console.log("Tú y alguien más puede tomar TODOS los cursos de Platzi durante un año");
}

// Ciclos

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es : " + i);
}

for (let i = 10; i >= 2; i--){
    console.log("El valor de i es : " + i);
}

// Replicar lo mismo de los ciclos for ahora utilizando ciclos while
let x = 0;
while (x < 5){
    console.log("El valor de i es : " + x);
 x++;
}

let y = 10;
while (y >= 2){
    console.log("El valor de i es : " + y);
    y--;
}

// Codigo que pregunta al usuario cuanto es 2 + 2, si responde mal se queda
// en un ciclo infininito hasta que conteste bien 

while (respuesta == '4'){
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}

//Crea una funcion que pueda recibir cualquier array como parametro e 
//imprima su primer elemento

let Perros =['chihuhua', 'Pitbull']
function imprimirPrimerElementoArray(tacos){
 console.log(tacos[0]);
}

//Crea una funcion que reciba cualquier array como parametro e 
// imprima todos sus lementos uno por uno

let perros=['Chihuhua', 'Pitbull', 'Boxer'];
function imprimirArrayCompleto(tacos){
 for( i=0 ;i < tacos.length;i++){
    console.log(tacos[i]);
 }   
 
}

// Crea una funcion que puede recibir cualquier objeto como parametro e
// imprima todos sus elementos uno por uno

let object= {
    name : 'Irving',
    age: 23,
    city: 'Iguala' 
};
function imprimirElementoPorElementoObjeto(object){
    const arr = Object.values(object)
    for( i=0 ;i < arr.length;i++){
       console.log(arr[i]);
    }   
    
   }

//Bonus
//Replicar el if else de arriba pero solo con if

function conseguirTipodeSuscripcion(suscripcion){ 

if (suscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
if (suscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
}
if (suscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
}
if(suscripcion === "ExpertDuo"){
    console.log("Tú y alguien más puede tomar TODOS los cursos de Platzi durante un año");
    return;        
    } 

        console.warn('Ese tipo de suscripción no existe');
 }

 // Lo mismo de arriba pero solo con un condicional, arrays u objetos

 const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más puede tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipodeSuscripcion(suscripcion){
if(tiposDeSuscripciones[suscripcion]){
    console.log(tiposDeSuscripciones[suscripcion]);
    return;
}

console.warn('Ese tipo de suscripción no existe');
}