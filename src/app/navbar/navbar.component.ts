import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Ruta } from '../models/ruta.models';
import { ListaRutasService } from '../lista-rutas.service';
import { ParamMap, Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  rutas: Ruta[];
  @ViewChild("buscar") inputBusqueda: ElementRef; //Esto es para pasar el decorador input con el texto del input a la funcion getBusqueda

  constructor(
    public registroService: RegistroService, //Este inyectable es para el el login
    private listaRutasService: ListaRutasService, //Este inyectable es para ña busqueda
    private router: ActivatedRoute //Para subscribirme a la url
  ) { }

  ngOnInit(): void {




  }


  //METODO BUSQUEDA EN NAVBAR
  async onSubmit() {
    // console.log(this.inputBusqueda.nativeElement.value);
    try {
      this.rutas = await this.listaRutasService.getBusqueda(this.inputBusqueda.nativeElement.value);
      console.log(this.rutas);
    } catch (error) {
      console.log(error);
    }
  }



}

