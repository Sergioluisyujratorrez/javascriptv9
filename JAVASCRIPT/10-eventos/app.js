

// Evento click para cambiar el tema claro/oscuro
const botonTema = document.querySelector("#botonTema");

 botonTema.addEventListener("click", () => {

   document.body.classList.toggle("dark");
 })  

 //Evento click menu hambuerguesa abrir/cerrar

 const botonMenu = document.querySelector("#botonMenu");  
 const menu = document.querySelector("#menu");

 botonMenu.addEventListener("click", () => {
   menu.classList.toggle("abierto") 
 })

 // Evento para agregar producto sin recargar
 const formularioAgregar = document.querySelector("#formularioAgregar")
 const inputProducto = document.querySelector("#inputProducto")
 const listaProductos = document.querySelector("#listaProductos")


 formularioAgregar.addEventListener("submit", (evento) => {
   evento.preventDefault(); // evitar que la pagina recarge 
   
   const nombre = inputProducto.value.trim();
   if (!nombre) return;

   const item = document.createElement("li");
   item.innerHTML = ` ${nombre} ` 

   listaProductos.appendChild(item);
   inputProducto.value = " ";
   

 })


// eventos no tan comunes

// keydown  = cuando presionas una tecla
// keyup = cuando sueltas la tecla


// input = cuando escribo un texto
// focus = cuando un input recibe el cursor

//MOuse
 // click
 // dbclick = doble click
 // mouseover = cuando el mosue entra en un elemento
 // mouseout = cuabdo el mouse sale

 // Scroll 
 // scroll = cuando hace scroll