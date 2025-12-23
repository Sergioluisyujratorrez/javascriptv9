// Añadir funciones a un objeto

const reproductorMusica = {

   reproducir: function(id) {
      console.log(`Reproduciendo cancion con el id: ${id}`);
   },
   
   pausar: function () {
      console.log("Pausando...");
   },

   borrar: function (id) {
      console.log(`Borrando Cancion... ${id}`);
   }


}


reproductorMusica.reproducir(30);
reproductorMusica.pausar();
reproductorMusica.borrar(5);