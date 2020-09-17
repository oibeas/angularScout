import { Component, OnInit } from '@angular/core';
import { ListaRutasService } from '../lista-rutas.service';
import { Ruta } from '../models/ruta.models';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-ruta',
  templateUrl: './detalle-ruta.component.html',
  styleUrls: ['./detalle-ruta.component.css']
})
export class DetalleRutaComponent implements OnInit {

  ruta: Ruta;
  arrCoordenadas: string[];
  mapTypeId: string;

  constructor(
    private listaRutasService: ListaRutasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.mapTypeId = 'hybrid'
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.ruta = await this.listaRutasService.getById(params.rutaId)
      console.log(this.ruta)
      this.arrCoordenadas = this.ruta.puntos_ruta.split(' ')
      console.log(this.arrCoordenadas);
    });
  }
}

//SIMILAR PARA GUARDAR LAS imagenes DE LA RUTA EN UN ARRAY Y LOS puntos_ruta EN OTRO.
// .then(response => {
//   this.rutas = response;
//   for (let ruta of response) {
//     const arrImagenes = ruta.imagenes.split(',');
//     ruta.arrImagenes = arrImagenes
//   
