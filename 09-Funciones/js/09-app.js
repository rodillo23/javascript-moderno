//Funciones en un objeto

const reproductor = {
    reproducir: function(cancion){
        console.log(`Reproduciendo cancion: ${cancion}`);
    }, 
    pausar: function(){
        console.log('Pausando..');
    },
    eliminar: function(cancion){
        console.log(`Eliminando la cancion ${cancion}`);
    }, 
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}

reproductor.reproducir('Eres mi religión')
reproductor.reproducir('hey Jude!')
reproductor.pausar()
reproductor.eliminar('Gasolina')

reproductor.crearPlaylist("Pa' trabajar")
reproductor.reproducirPlaylist("Pa' trabajar")