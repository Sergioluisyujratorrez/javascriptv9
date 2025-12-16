// Operador de propagación (spread operator)


const carrito = [];

const producto = {nombre: "television", precio: 300};
const producto2 = {nombre: "celular", precio: 500};
const producto3 = {nombre: "tablet", precio: 200};

let resultado = [...carrito, producto];
resultado = [...resultado, producto2]; 
resultado = [ producto3, ...resultado];

console.table(resultado);

// forma declarativa
