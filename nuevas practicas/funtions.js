//declarative function
function miFuncion() {
    return 3;
}
miFuncion(); //llamada a la funcion miFuncion

//function expression
var miFuncion = function (a,b) { //funcion anonima var
    return a + b;
}
miFuncion(2,3); //llamada a la funcion miFuncion

var saludar = function (nombre) {
    return "Hola " + nombre;
}
console.log(saludar("pepe"));