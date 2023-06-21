// para seleccionar en js un elemento del html se usa document.getElementById("id")
// para seleccionar en js un elemento del html se usa document.querySelector("selector")
// para seleccionar en js un elemento del html se usa document.querySelectorAll("selector")
// para seleccionar en js un elemento del html se usa document.getElementsByClassName("clase")
// para seleccionar en js un elemento del html se usa document.getElementsByTagName("etiqueta")
// para seleccionar en js un elemento del html se usa document.getElementsByName("nombre")
//


document.getElementById("boton").addEventListener("click", cambiarTitulo);

function cambiarTitulo() {
  var nuevoTitulo = prompt("Ingresa el nuevo título:");
  var titulo = document.getElementById("titulo");
  titulo.innerHTML = nuevoTitulo;
}
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const h1 = document.querySelector('h1');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
  const sumaInputs = input1.value + input2.value;
  pResult.innerText="Resultado: "+sumaInputs;
}