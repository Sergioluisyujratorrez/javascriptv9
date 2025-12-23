// DOM 
// DOCUMENT OBJECT MODEL 


const input = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("listado");

function agregarTarea() {
   const texto = input.value.trim();

   const li = document.createElement("li")
   li.textContent = texto;

   const eliminar = document.createElement("button");
   eliminar.textContent = "Borrar";

   eliminar.addEventListener("click", () => {
      li.remove();      
   })


   li.appendChild(eliminar)
   lista.appendChild(li)
   input.value = "";

   console.log(texto);
}

boton.addEventListener("click", agregarTarea)