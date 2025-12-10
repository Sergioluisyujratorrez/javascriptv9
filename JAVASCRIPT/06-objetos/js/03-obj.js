// Vamos asignarle variables a la propiedades de un objeto


const producto = { 
   nombre: "Televisor",
   precio: 900,
   disponible: true,
}
console.log(producto);


const cambio = producto.nombre;
console.log(cambio);

const costo = producto.precio;
console.log(costo);


// Destructuring de un objeto

const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);



