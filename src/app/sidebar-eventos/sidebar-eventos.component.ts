import { Component, OnInit } from '@angular/core';
import { SidebarEventosService } from '../sidebar-eventos.service';
import { Evento } from '../models/evento.models';

@Component({
  selector: 'app-sidebar-eventos',
  templateUrl: './sidebar-eventos.component.html',
  styleUrls: ['./sidebar-eventos.component.css']
})
export class SidebarEventosComponent implements OnInit {

  eventos: Evento[];

  constructor(private sidebarEventosService: SidebarEventosService) { }

  ngOnInit(): void {
    this.sidebarEventosService.getUltimos()
      .then(response => {
        this.eventos = response;
      })
      .catch(error => {
        console.log(error.status);
      })
  }

}
