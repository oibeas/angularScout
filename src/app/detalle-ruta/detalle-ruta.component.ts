import { Component, OnInit } from '@angular/core';
import { ListaRutasService } from '../lista-rutas.service';
import { Ruta } from '../models/ruta.models';

@Component({
  selector: 'app-detalle-ruta',
  templateUrl: './detalle-ruta.component.html',
  styleUrls: ['./detalle-ruta.component.css']
})
export class DetalleRutaComponent implements OnInit {

  ruta: Ruta;
  imagenes: string[];

  constructor(private listaRutasService: ListaRutasService) { }

  ngOnInit(): void {
    this.listaRutasService.getById()
      .then(response => {
        // console.log(response)
        this.ruta = response;
        // const imagenes = this.ruta.imagenes.split(',');
        // console.log(imagenes);
      }).catch(error => console.log(error))
  }

}

//SIMILAR PARA GUARDAR LAS imagenes DE LA RUTA EN UN ARRAY Y LOS puntos_ruta EN OTRO.
// .then(response => {
//   this.rutas = response;
//   for (let ruta of response) {
//     const arrImagenes = ruta.imagenes.split(',');
//     ruta.arrImagenes = arrImagenes
//   }
