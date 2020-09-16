import { Injectable } from '@angular/core';
import { Ruta } from './models/ruta.models';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

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

  getById(pRutaId): Promise<Ruta> {
    return this.httpClient.get<Ruta>(`${this.baseUrl}/${pRutaId}`).toPromise();
  }

  postForm(pFormValue): Promise<FormGroup> {
    return this.httpClient.post<FormGroup>(`${this.baseUrl}/new`, pFormValue).toPromise();
  }

}
