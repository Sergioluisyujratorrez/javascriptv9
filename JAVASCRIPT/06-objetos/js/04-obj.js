// Objetos dentro de objetos


const producto = {
   nombre: "Televisor",
   precio: 900,
   disponible: true,
   informacion: {
      cantidad: 60,
      origen: "Bolivia"
   }
}

console.log(producto);
console.log(producto.informacion.origen);

// Acceder a los valores de un objeto dentro de otro objeto

const producto2 = {
   nombre: "mango",
   precio: 20,
   disponible: true,
   informacion: {
      medida: {
         peso: "1kg",
         medidad: "1m",
      },
      fabricacion:{
         pais: "Argentina",
      }
   }
}

console.log(producto2.informacion.fabricacion.pais);




