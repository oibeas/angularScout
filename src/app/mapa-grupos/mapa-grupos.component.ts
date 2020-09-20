import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GruposService } from '../grupos.service';
import { Grupo } from '../models/grupo.model';

@Component({
  selector: 'app-mapa-grupos',
  templateUrl: './mapa-grupos.component.html',
  styleUrls: ['./mapa-grupos.component.css']
})
export class MapaGruposComponent implements OnInit {

  grupos: Grupo[];
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;
  previous: any;

  @ViewChild("buscar") inputBusqueda: ElementRef;


  ngOnInit(): void {
    this.gruposService.getAll()
      .then(response => {
        // console.log(response);
        this.grupos = response
      })
      .catch(error => console.log(error));
  }

  constructor(private gruposService: GruposService) {
    this.mapTypeId = 'roadmap';
    this.located = false
  }

  async onSubmit() {
    // console.log(this.inputBusqueda.nativeElement.value);
    try {
      this.grupos = await this.gruposService.getBusqueda(this.inputBusqueda.nativeElement.value);
      // console.log(this.eventos);
    } catch (error) {
      console.log(error);
    }
  }

  //Evento para que se cierre la ventana de información previa cuando pincho sobre una nueva
  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  //Evento para que se cierre la ventana de información al hacer click sobre el mapa
  clickedMap($event) {
    if (this.previous != null) {
      this.previous.close()
    }
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      //para que cuando me localice (y no antes) se muestre el icono sobre mi posición
      this.located = true;
    })
  }
}
