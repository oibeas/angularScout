export class Ruta {
    id: number;
    nombre: string;
    localizacion: string;
    longitud: number;
    latitud: number;
    puntos_ruta: string;
    distancia: number;
    circular: boolean;
    altitud_max: number;
    altitud_min: number;
    dificultad: string;
    fecha_creacion: Date;
    imagenes: string;
    arrImagenes: any[]; //Esto mete los enlaces de imagenes separadas por comas en un array
    descripcion: string;
    duracion: Date;
    usuarioId: number;
    usuario: string;
    puntuacion: number;
}