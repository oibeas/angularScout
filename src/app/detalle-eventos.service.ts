import { Injectable } from '@angular/core';
import { Evento } from './models/evento.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleEventosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/eventos'
  }

  getById(pEventoId): Promise<Evento> {
    return this.httpClient.get<Evento>(this.baseUrl + `/${pEventoId}`).toPromise();
  }

}
