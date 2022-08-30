const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const input7 = document.querySelector('#calculo7');
const input8 = document.querySelector('#calculo8');



const btn = document.querySelector('#btnCalcular');
const pResultS = document.querySelector('#resultSuma');
const pResultR = document.querySelector('#resultResta');
const pResultM = document.querySelector('#resultMultiplicacion');
const pResultD = document.querySelector('#resultDivision');

const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');

pResultS.style.backgroundColor ='#FFF700';
suma.style.backgroundColor = '#1ABC9C';
resta.style.backgroundColor = '#40A6EC';
multiplicacion.style.backgroundColor = '#FFD57E';
division.style.backgroundColor = '#FC8476';

function btnOnclickSuma() {
   //console.log( input1.value + input2.value);
  
   console.log(  Number(input1.value) + Number(input2.value) );
   const sumaInputs = (Number(input1.value)) + (Number(input2.value));
   pResultS.innerText = "Resultado Suma: " + sumaInputs;
}

function btnOnclickResta() {
   //console.log( input1.value + input2.value);
  
   console.log(  (Number(input3.value)) - (Number(input4.value)) );
   const restaInputs =(Number(input3.value)) - (Number(input4.value));
   pResultR.innerText = "Resultado Resta: " + restaInputs;
}

function btnOnclickMultiplicacion() {
   //console.log( input1.value + input2.value);
  
   console.log(  (Number(input5.value)) * (Number(input6.value)) );
   const multiplicacionInputs = ( Number(input5.value)) * (Number(input6.value));
   pResultM.innerText = "Resultado Multiplicacion: " + multiplicacionInputs;
}

function btnOnclickDivision() {
   //console.log( input1.value + input2.value);
  
   console.log(  Number(input8.value) / Number(input7.value) );
   const divisionInputs = (Number(input8.value)) / (Number(input7.value));
   pResultD.innerText = "Resultado Division: " + divisionInputs;
}