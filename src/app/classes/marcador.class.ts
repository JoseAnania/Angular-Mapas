/* Clase creada para controlar la estructura que tendrán los Marcadores del Mapa */
export class Marcador {

    // propiedades
    public lat: number;
    public lng: number;
    public titulo: string = 'Sin Título';
    public desc: string = 'Sin Descripción';

    // constructor
    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}