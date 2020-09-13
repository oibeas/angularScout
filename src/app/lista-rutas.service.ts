import { Injectable } from '@angular/core';
import { Ruta } from './models/ruta.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaRutasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/rutas'
  }


  getAll(): Promise<Ruta[]> {
    return this.httpClient.get<Ruta[]>(this.baseUrl).toPromise();
  }

  getById(): Promise<Ruta> {
    return this.httpClient.get<Ruta>(`${this.baseUrl}/2`).toPromise();
  }

}
