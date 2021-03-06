import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ruta } from '../models/ruta.models'
import { ListaRutasService } from '../lista-rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {

  rutas: Ruta[];
  padding: string;
  @ViewChild("buscar") inputBusqueda: ElementRef; //Esto es para pasar el decorador input con el texto del input a la funcion getBusqueda


  constructor(
    private listaRutasService: ListaRutasService,
    private router: Router) {
    this.padding = "";
  }

  ngOnInit(): void {
    this.padding = "10px";
    const miroute = this.router.url;
    if (miroute === '/rutas') {
      this.padding = "100px";
    }

    this.listaRutasService.getAll()
      .then(response => {
        this.rutas = response;
        for (let ruta of response) { //Metemos la lista de imagenes separadas por comas en un array
          const arrImagenes = ruta.imagenes.split(',');
          ruta.arrImagenes = arrImagenes
        }
        // console.log(this.rutas);
      })
      .catch(error => {
        console.log(error.status);
      });
  }


  // async onSubmit() {
  //   console.log(this.inputBusqueda.nativeElement.value);
  //   try {
  //     this.rutas = await this.listaRutasService.getBusqueda(this.inputBusqueda.nativeElement.value);
  //     console.log(this.rutas);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  onSubmit(): void {
    // console.log(this.inputBusqueda.nativeElement.value);
    this.listaRutasService.getBusqueda(this.inputBusqueda.nativeElement.value)
      .then(response => {
        this.rutas = response;
        for (let ruta of response) { //Metemos la lista de imagenes separadas por comas en un array
          const arrImagenes = ruta.imagenes.split(',');
          ruta.arrImagenes = arrImagenes
        }
        // console.log(response);
      }).catch(error => {
        console.log(error.status);
      });
  }


}
