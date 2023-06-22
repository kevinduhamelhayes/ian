var Articulos = [
    { nombre: "bici", costo: 3000 },
    { nombre: "tv", costo: 2500 },
    { nombre: "libro", costo: 320 },
    { nombre: "celular", costo: 10000 },
    { nombre: "laptop", costo: 20000 },
    { nombre: "teclado", costo: 500 },
    { nombre: "audifonos", costo: 1700 },
    { nombre: "parlante", costo: 4000 },
    { nombre: "cables", costo: 150 },
    { nombre: "cargador", costo: 300 },
]
var ArticulosFiltrados = Articulos.filter(function (Articulo) {
    return Articulo.costo <= 500 //retorna todos los articulos que cuestan menos de 500
});
var nombreArticulos = Articulos.map(function (Articulo) {
    return Articulo.nombre //retorna todos los nombres de los articulos
}
);
var encuentraArticulo = Articulos.find(function (Articulo) {
    return Articulo.nombre === "laptop" //retorna el articulo que se llame laptop
})
Articulos.forEach(function (Articulo) {
    console.log(Articulo.nombre) //retorna todos los nombres de los articulos
})

var ArticulosBaratos = Articulos.some(function (Articulo) {
    return Articulo.costo <= 700 //retorna true si algun articulo cuesta menos de 700
})