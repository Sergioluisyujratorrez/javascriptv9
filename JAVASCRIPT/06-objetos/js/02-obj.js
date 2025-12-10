
const producto = {
   nombre: "Televisor",
   precio: 900,
   disponible: true,
}

console.log(producto);

// acceder a las propiedades de un objeto
console.log(producto.nombre);

//agregar nuevas propiedades a un objeto
producto.cantidad = 30;
console.log(producto.cantidad);


//Modificar propiedades de un objeto
producto.precio = 1200;
console.log(producto);

// Eliminar propiedades de un objeto
delete producto.disponible;
console.log(producto.disponible);


let persona = null;
console.log(persona);