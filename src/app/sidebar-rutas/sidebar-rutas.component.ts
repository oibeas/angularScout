import { Component, OnInit } from '@angular/core';
import { SidebarRutasService } from '../sidebar-rutas.service';
import { Ruta } from '../models/ruta.models'


@Component({
  selector: 'app-sidebar-rutas',
  templateUrl: './sidebar-rutas.component.html',
  styleUrls: ['./sidebar-rutas.component.css']
})
export class SidebarRutasComponent implements OnInit {

  rutas: Ruta[];

  constructor(private sidebarRutasService: SidebarRutasService) { }

  ngOnInit(): void {
    this.sidebarRutasService.getMejores()
      .then(response => {
        // console.log(response);
        this.rutas = response;
      })
      .catch(error => {
        console.log(error.status);

      });
  }

}
