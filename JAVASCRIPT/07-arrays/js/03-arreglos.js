// Añadir elementos al final del arreglo y al inicio

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);

// al final
meses.push('Agosto'); 
console.table(meses);


// Ejemplo sobre carrito de compras

const carrito = [];

// definiendo un producto

const producto = {
   nombre: 'Monitor 32 pulgadas',
   precio: 400
}
const producto2 = {
   nombre: 'Celular',
   precio: 800
}
const producto3 = {
   nombre: 'Teclado',
   precio: 50
}
const producto4 = {
   nombre: 'Mouse',
   precio: 25
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3); // al inicio
carrito.push(producto4);

console.table(carrito);

// forma imperativa de agregar un elemento al arreglo
