//reproductor con arrow functions

const reproductor = {
    cancion: '',

    reproducir: (cancion) => console.log(`Reproduciendo cancion: ${cancion}`), 
    
    pausar: () => console.log('Pausando..'),
    
    eliminar: (cancion) => console.log(`Eliminando la cancion ${cancion}`), 
    
    crearPlaylist: (nombre) => console.log(`Creando la playlist: ${nombre}`),
    
    reproducirPlaylist: (nombre) => console.log(`Reproduciendo la Playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log('Agregando cancion...');
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion ='Help';
reproductor.obtenerCancion;

reproductor.reproducir('Eres mi religión')
reproductor.reproducir('hey Jude!')
reproductor.pausar()
reproductor.eliminar('Gasolina')

reproductor.crearPlaylist("Pa' trabajar")
reproductor.reproducirPlaylist("Pa' trabajar")