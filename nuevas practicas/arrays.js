var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
var masFrutas = frutas.push("Uvas"); //añadir elemento al final del array (en un array nuevo)
console.log(frutas);
var ultimo = frutas.pop(); //eliminar el ultimo elemento del array
console.log(frutas);
var nuevaLongitud = frutas.unshift("Uvas"); //añadir elemento al inicio del array
console.log(frutas);
var borrarFruta = frutas.shift("Uvas"); //eliminar el primer elemento del array
console.log(frutas);
var posicion = frutas.indexOf("Cereza"); //buscar la posicion de un elemento en el array
console.log(frutas);
console.log(posicion);

