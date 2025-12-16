// Metodo .map 

const carrito = [
   {nombre: "Television", precio: 900},
   {nombre: "Radio", precio: 150},
   {nombre: "Consola", precio: 500}
];

carrito.forEach(function(otro) {
   console.log(` ${otro.nombre} - ${otro.precio}`);
})


carrito.map(function(producto) {
   console.log(` ${producto.nombre} - ${producto.precio}`);
})

// map
const nuevoArreglo = carrito.map(function (producto) {
   return `${producto.nombre} - ${producto.precio}`
})

console.log(nuevoArreglo);


// foreach

const nuevoArreglo2 = carrito.forEach(function (otro) {
   return `${otro.nombre} - ${otro.precio}`
})

console.log(nuevoArreglo2);
