document.getElementById("boton").addEventListener("click", cambiarTitulo);

function cambiarTitulo() {
  var nuevoTitulo = prompt("Ingresa el nuevo título:");
  var titulo = document.getElementById("titulo");
  titulo.innerHTML = nuevoTitulo;
}