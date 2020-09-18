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
  firstMarker: string;
  lastMarker: string;
  arrCoordenadas: string[];
  mapTypeId: string;

  constructor(
    private listaRutasService: ListaRutasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.mapTypeId = 'hybrid';
    this.firstMarker = "";
    this.lastMarker = "";
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.ruta = await this.listaRutasService.getById(params.rutaId)
      console.log(this.ruta.puntos_ruta, 'puntos ruta')
      this.arrCoordenadas = this.ruta.puntos_ruta.split(' ')
      console.log(this.arrCoordenadas);
      this.firstMarker = this.arrCoordenadas[0];
      this.lastMarker = this.arrCoordenadas[this.arrCoordenadas.length - 2];

    });
  }
}
