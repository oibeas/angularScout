export class Comentario {
    id: number;
    id_ruta: number;
    comentario: string;
    fecha_publicacion: Date;
    fk_usuarioId: number;
    usuario: string;
}