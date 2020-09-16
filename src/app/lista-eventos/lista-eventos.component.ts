import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Evento } from '../models/evento.models';
import { ListaEventosService } from '../lista-eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  eventos: Evento[];
  @ViewChild("buscar") inputBusqueda: ElementRef; //Esto es para pasar el decorador input con el texto del input a la funcion getBusqueda

  constructor(private listaEventosService: ListaEventosService) { }

  ngOnInit(): void {
    this.listaEventosService.getAll()
      .then(response => {
        this.eventos = response;
        // console.log(response);
      }).catch(error => {
        console.log(error.status);
      });
  }

  async onSubmit() {
    // console.log(this.inputBusqueda.nativeElement.value);
    try {
      this.eventos = await this.listaEventosService.getBusqueda(this.inputBusqueda.nativeElement.value);
      // console.log(this.eventos);
    } catch (error) {
      console.log(error);
    }
  }

  // onSubmit(): void {
  //   // console.log(this.inputBusqueda.nativeElement.value);
  //   this.listaEventosService.getBusqueda(this.inputBusqueda.nativeElement.value)
  //     .then(response => {
  //       this.eventos = response;
  //       console.log(response);
  //     }).catch(error => {
  //       console.log(error.status);
  //     });
  // }



}
