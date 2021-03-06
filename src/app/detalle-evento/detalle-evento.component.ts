import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Evento } from '../models/evento.models';
import { DetalleEventosService } from '../detalle-eventos.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {

  eventos: Evento;


  constructor(
    private activatedRoute: ActivatedRoute,
    private detalleEventosService: DetalleEventosService,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   this.detalleEventosService.getById(this.eventos.id)
  //     .then(response => {
  //       this.eventos = response;
  //       console.log(response);

  //     }).catch(error => {
  //       console.log(error.status);
  //     });
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.eventos = await this.detalleEventosService.getById(params.eventoId);
      // console.log(params);
      console.log(this.eventos);

      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 10)
      });

    })
  }

}
