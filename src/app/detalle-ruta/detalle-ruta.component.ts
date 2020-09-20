import { Component, OnInit } from '@angular/core';
import { ListaRutasService } from '../lista-rutas.service';
import { Ruta } from '../models/ruta.models';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Comentario } from '../models/comentario.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  comentarios: Comentario[];
  formulario: FormGroup;

  constructor(
    private listaRutasService: ListaRutasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.mapTypeId = 'hybrid';
    this.firstMarker = "";
    this.lastMarker = "";
    {
      this.formulario = new FormGroup({
        comentario: new FormControl('', [Validators.required]),
      });
    }
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.ruta = await this.listaRutasService.getById(params.rutaId)
      // console.log(this.ruta.puntos_ruta, 'puntos ruta')
      this.arrCoordenadas = this.ruta.puntos_ruta.split(' ')
      // console.log(this.arrCoordenadas);
      this.firstMarker = this.arrCoordenadas[0];
      this.lastMarker = this.arrCoordenadas[this.arrCoordenadas.length - 2];

      this.comentarios = await this.listaRutasService.getComentarios(params.rutaId)
      // console.log(this.comentarios, 'COMENTARIOS:');
    });
  }

  async onSubmit() {
    // console.log(this.formulario.value)
    const body = this.formulario.value;
    //asigno por defecto la foreing key de default_user
    body.fk_usuarioId = 1

    const response = await this.listaRutasService.postComentario(this.ruta.id, body);
    console.log(response);

    //vuelve a pintar los comentarios, añadiendo el nuevo
    // //DE MOMENTO AQUÍ NO ESTÁ ENTRANDO EL FLUJO
    this.router.navigate([`/rutas/${this.ruta.id}`])

  }
}
