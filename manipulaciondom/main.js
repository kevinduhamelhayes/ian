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

const h1=document.querySelector('h1');const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('parrafito');
const pid=document.getElementById('pid');const input=document.querySelector('input');
console.log(input.value);console.log({h1,p,parrafito,pid,input,});
h1.innerHTML='Patito <br> Feo';h1.innerText='Patito <br> Feo';
h1.classList.add('rojo');h1.classList.remove('verde');input.value="456"
const img=document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
pid.innerHTML="";
pid.appendChild(img);