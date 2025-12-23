// Unir funciones

function primeraFuncion(){
   console.log("Iniciando...");
   segundaFuncion();
   terceraFuncion("Sergio");
}

primeraFuncion();


function segundaFuncion() {
   console.log("Desde la segunda funcion...");
}


function terceraFuncion(usuario) {
   console.log("Desde la tercera funcion");
   console.log("Hola " + usuario);
}