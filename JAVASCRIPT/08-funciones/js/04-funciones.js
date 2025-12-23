// Parametros por default

function saludar(nombre, apellido = "No tiene apellido") {
   console.log(`Hola ${nombre} ${apellido} como estas`);
}

saludar("Sergio", "Yujra");