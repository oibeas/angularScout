import { Component, OnInit } from '@angular/core';
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

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

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
