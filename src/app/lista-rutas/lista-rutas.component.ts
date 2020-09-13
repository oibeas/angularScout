import { Component, OnInit } from '@angular/core';
import { Ruta } from '../models/ruta.models'
import { ListaRutasService } from '../lista-rutas.service';

@Component({
  selector: 'app-lista-rutas',
  templateUrl: './lista-rutas.component.html',
  styleUrls: ['./lista-rutas.component.css']
})
export class ListaRutasComponent implements OnInit {

  rutas: Ruta[];


  constructor(private listaRutasService: ListaRutasService) { }

  ngOnInit(): void {
    this.listaRutasService.getAll()
      .then(response => {
        this.rutas = response;
        for (let ruta of response) {
          const arrImagenes = ruta.imagenes.split(',');
          ruta.arrImagenes = arrImagenes
        }
        // console.log(this.rutas);
      })
      .catch(error => {
        console.log(error.status);
      });
  }

}
