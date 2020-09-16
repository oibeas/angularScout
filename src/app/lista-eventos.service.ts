import { Injectable } from '@angular/core';
import { Evento } from './models/evento.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaEventosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/eventos'
  }

  getAll(): Promise<Evento[]> {
    return this.httpClient.get<Evento[]>(this.baseUrl).toPromise();
  }

  getBusqueda(pBusqueda): Promise<Evento[]> {
    // console.log(this.baseUrl + `/busqueda/${pBusqueda}`);
    return this.httpClient.get<Evento[]>(this.baseUrl + `/busqueda/${pBusqueda}`).toPromise();
  }

}
