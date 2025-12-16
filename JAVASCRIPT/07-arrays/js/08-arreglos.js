

// .some y includes

// .some Revisa si al menos un elemento cumple o no la condicion
// true o false

const carrito = [
   {nombre: "Television", precio: 900},
   {nombre: "Radio", precio: 150},
   {nombre: "Consola", precio: 500}
];


const producto = carrito.some((prod) => {
   return prod.nombre === "Video";
})

console.log(producto);


// includes() 
// Revisa si el arreglo contiene un valor exacto
// true o false


const meses = ["Enero", "Febrero", "Marzo"];
 
// metodo largo
meses.forEach((mes) => {
   if (mes === 'Enero') {
      console.log("Enero si existe");
   }
})

// metodo corto
console.log(meses.includes("marzo"));
