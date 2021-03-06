import { Injectable } from '@angular/core';
import { Grupo } from './models/grupo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/grupos'
  }

  getAll(): Promise<Grupo[]> {
    return this.httpClient.get<Grupo[]>(this.baseUrl).toPromise();
  }

  getBusqueda(pBusqueda): Promise<Grupo[]> {
    // console.log(this.baseUrl + `/busqueda/${pBusqueda}`);
    return this.httpClient.get<Grupo[]>(this.baseUrl + `/busqueda/${pBusqueda}`).toPromise();
  }
}