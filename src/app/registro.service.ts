import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario.model';


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


  postLogin(pFormValue) {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, pFormValue).toPromise();
  }

  logueado() {
    let usuarioLogueado = localStorage.getItem('UsuarioscRoutes');
    usuarioLogueado = (JSON.parse(usuarioLogueado));
    if (localStorage.getItem('UsuarioscRoutes')) {
      // console.log('Usuario logueado:' + usuarioLogueado['usuario']);
      return usuarioLogueado['usuario'];
    } else {
      return false;
    }
  }


  // SE QUEDA EN BUCLE
  // datosUsuarioLogueado() {
  //   let datosUsuario = localStorage.getItem('UsuarioscRoutes');
  //   datosUsuario = (JSON.parse(datosUsuario));
  //   return this.httpClient.get<any>(`${this.baseUrl}/${datosUsuario['usuario']}`).toPromise();
  // }


}
