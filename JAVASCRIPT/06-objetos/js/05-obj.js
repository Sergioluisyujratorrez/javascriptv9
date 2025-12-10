// Copiar objetos dentro de otro objeto


const producto = {
      nombre: "Televisor",
      precio: 300,
      disponible: true,
};

const informacion = {
   cantidad: 60,
   origen: "China",
}

// Unir dos objetos
const unirObjetos = { ...producto, ...informacion };
console.log(unirObjetos);
