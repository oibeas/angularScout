import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }


  // Envio del formulario para registro de usuario
  postForm(pFormValue) {
    return this.httpClient.post<any>(`${this.baseUrl}/registro`, pFormValue).toPromise();
  }


  sendRegister(pFormValue) {
    return this.httpClient.post(`${this.baseUrl}/register`, pFormValue).toPromise();
  }

  sendLogin(pFormValue) {
    return this.httpClient.post(`${this.baseUrl}/login`, pFormValue).toPromise();
  }

}
