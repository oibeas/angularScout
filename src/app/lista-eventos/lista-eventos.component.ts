import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento.models';
import { ListaEventosService } from '../lista-eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  eventos: Evento[];

  constructor(private listaEventosService: ListaEventosService) { }

  ngOnInit(): void {
    this.listaEventosService.getAll()
      .then(response => {
        this.eventos = response;
        console.log(response);

      }).catch(error => {
        console.log(error.status);
      });
  }

}
