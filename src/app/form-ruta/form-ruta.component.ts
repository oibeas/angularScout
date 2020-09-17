import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaRutasService } from '../lista-rutas.service';

@Component({
  selector: 'app-form-ruta',
  templateUrl: './form-ruta.component.html',
  styleUrls: ['./form-ruta.component.css']
})
export class FormRutaComponent implements OnInit {

  formulario: FormGroup;
  mapTypeId: string;
  lat: number;
  lng: number;
  zoom: number;
  mapClickListener: any;
  arrCoordenadas: any[];
  arrSimple: any[];

  //CAMPOS QUE PERTENECEN AL FORMULARIO: nombre, localizacion, distancia, circular, dificultad, imagenes, descripcion, duracion, puntuacion.
  constructor(
    private listaRutasService: ListaRutasService,
    private zone: NgZone
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      localizacion: new FormControl('', [Validators.required]),
      distancia: new FormControl('', [Validators.required]),
      circular: new FormControl('', [Validators.required]),
      dificultad: new FormControl('', [Validators.required]),
      imagenes: new FormControl(''),
      descripcion: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      puntuacion: new FormControl('', [Validators.required]),
    });

    this.mapTypeId = 'hybrid';
    this.lat = 40.416729;
    this.lng = -3.703339;
    this.zoom = 9;
    this.arrCoordenadas = [];
    this.arrSimple = [];
  }

  ngOnInit(): void {
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.mapClickListener = map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        console.log(e, e.latLng.lat(), e.latLng.lng());
        this.arrCoordenadas.push({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        // console.log(this.arrCoordenadas);
      });
    });
  }

  //CAMPOS PARA EL MAPA: longitud, latitud, puntos_ruta.

  async onSubmit() {
    // console.log(this.formulario.value);
    const body = this.formulario.value;

    let coordenadas = "";
    for (let coordenada of this.arrCoordenadas) {
      coordenadas += `${coordenada.lng},${coordenada.lat} `
    }
    // console.log(coordenadas);

    body.latitud = this.arrCoordenadas[0].lat;
    body.longitud = this.arrCoordenadas[0].lng;
    body.puntos_ruta = coordenadas

    const response = await this.listaRutasService.postForm(body);
    console.log(response);
  }

}
