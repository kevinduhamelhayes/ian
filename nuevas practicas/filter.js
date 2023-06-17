var Artículos = [
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
var ArtículosFiltrados = Artículos.filter(function (Artículo) {
    return Artículo.costo <= 500
}
console.log(ArtículosFiltrados);