// Eliminar elementos con el metodo splice


const carrito = [];

const producto = {nombre: "television", precio: 300};
const producto2 = {nombre: "celular", precio: 500};
const producto3 = {nombre: "tablet", precio: 200};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);


carrito.splice(2, 1);

console.table(carrito);
