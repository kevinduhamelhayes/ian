var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
}
console.log(miAuto.marca);
console.log(miAuto.annio);
console.log(miAuto.modelo);

var miAuto2 = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autos = [];
for (let i = 0; i < 30; i++) {
    var marca = prompt("Ingrese la marca del auto");
    var modelo = prompt("Ingrese el modelo del auto");
    var annio = prompt("Ingrese el año del auto");
    autos.push(new auto(marca, modelo, annio));
}
console.log(autos.marca);
console.log(this.modelo);