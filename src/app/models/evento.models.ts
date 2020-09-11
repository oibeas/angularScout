export class Evento {
    id: number;
    nombre: string;
    ciudad: string;
    fecha: Date;
    longitud: number;
    latitud: number;
    sitio_web: string;
    descripcion: string;
    imagenes: string;
    altitud_min: number;
    fk_usuarioId: number;
    fk_rutaId: number;
}