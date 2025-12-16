// Iterrar un arreglo o array foreach


const carrito = [
   {nombre: "Television", precio: 900},
   {nombre: "Radio", precio: 150},
   {nombre: "Consola", precio: 500}
];


carrito.forEach(function(prod)   {
   console.log( `Producto: ${prod.nombre} - Precio: ${prod.precio}` );
})

// for 