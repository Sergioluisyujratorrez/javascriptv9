// Variables

const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

// eventos
function cargarEventosListeners() {
   // console.log("Holaa");
   listaCursos.addEventListener("click", agregarCurso)
   carrito.addEventListener("click", eliminarCurso)

   document.addEventListener("DOMContentLoaded", () => {
      articulosCarrito = JSON.parse(localStorage.getItem("carrito") || [])
      carritoHTML();
   })


   vaciarCarrito.addEventListener("click", ()=> {
      articulosCarrito = [];
      limpiarHTML();
   })
}
cargarEventosListeners();


function agregarCurso(evento) {
   evento.preventDefault();
   // console.log("Agregando al carrito");
   if (evento.target.classList.contains("agregar-carrito")) {
      // console.log("Agregando al carrito....");
      // console.log(evento.target.parentElement.parentElement);
      const cursoSeleccionado = evento.target.parentElement.parentElement;
      leerDatosCurso(cursoSeleccionado);
   } 
   // console.log(evento.target.classList);
}

function  eliminarCurso(e) {
   // console.log("Eliminando");
   if (e.target.classList.contains("borrar-curso")) {
      const cursoId = e.target.getAttribute('data-id');

      articulosCarrito = articulosCarrito.filter((cursoSeleccionado) => {
         return cursoSeleccionado.id !== cursoId; 
      })

      // console.log(articulosCarrito);
      carritoHTML();
   }

}

// leer el html al que le damos el click
function leerDatosCurso(cursoSeleccionado) {
   // console.log( cursoSeleccionado);
   const infoCurso = {
      imagen: cursoSeleccionado.querySelector('img').src,
      titulo: cursoSeleccionado.querySelector('h4').textContent,
      precio: cursoSeleccionado.querySelector('.precio span').textContent,
      id: cursoSeleccionado.querySelector(".agregar-carrito").getAttribute("data-id"),
      cantidad: 1
   }
   // console.log(infoCurso);

   const existe = articulosCarrito.some((cursoSeleccionado) => {
      return cursoSeleccionado.id ===  infoCurso.id;
   }) 

   // console.log(existe);

   if (existe) {
      // actualizar cantidad
      const cursos = articulosCarrito.map(cursoSeleccionado => {
      if (cursoSeleccionado.id === infoCurso.id) {
         cursoSeleccionado.cantidad++;
         return cursoSeleccionado;
      } else {
         return cursoSeleccionado;
      }
   })
      articulosCarrito = [...cursos];
   } else {
   // agrega elementos al carrito

      articulosCarrito = [...articulosCarrito, infoCurso];
   }

   console.log(articulosCarrito);
   carritoHTML();
}

function carritoHTML() {
   limpiarHTML();
   // iterrar
   articulosCarrito.forEach(cursoSeleccionado => {
      // creamos el tbody
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>
      <img src="${cursoSeleccionado.imagen}" width="80">
      </td>
      <td>${cursoSeleccionado.titulo}</td>
      <td>${cursoSeleccionado.precio}</td>
      <td>${cursoSeleccionado.cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${cursoSeleccionado.id}">Eliminar</a> 
      </td>
      

      `;
      //agregar el html en el tbody
      contenedorCarrito.appendChild(row);

   })

   sincronizarStorage();
}


// limpiar el html
function limpiarHTML() {
  contenedorCarrito.innerHTML = '';
}

function sincronizarStorage() {
   localStorage.setItem("carrito", JSON.stringify(articulosCarrito) );
}