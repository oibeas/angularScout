import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaRutasService } from '../lista-rutas.service';

@Component({
  selector: 'app-form-ruta',
  templateUrl: './form-ruta.component.html',
  styleUrls: ['./form-ruta.component.css']
})
export class FormRutaComponent implements OnInit {

  formulario: FormGroup;

  //CAMPOS QUE PERTENECEN AL FORMULARIO: nombre, localizacion, distancia, circular, dificultad, imagenes, descripcion, duracion, puntuacion.
  constructor(private listaRutasService: ListaRutasService) {
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
    })
  }

  //CAMPOS PARA EL MAPA: longitud, latitud, puntos_ruta, altitud_max, altitud_min.

  ngOnInit(): void {
  }

  async onSubmit() {
    // console.log(this.formulario.value);
    const body = this.formulario.value;
    // body.latitud = coordenadas que reciba del mapa
    // body.longitud = coordenadas que RaceSubscriber, etc.
    // const response = await this.listaRutasService.postForm(body);
    // console.log(response);
  }

}
