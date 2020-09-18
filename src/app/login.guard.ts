import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode'; //Libreria para decidificar token: npm install jwt-decode

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loginstorage = localStorage.getItem('UsuarioscRoutes');
    loginstorage = (JSON.parse(loginstorage));
    if (localStorage.getItem('UsuarioscRoutes')) {
      // console.log(loginstorage['token']);

      //VERIFICAR EL TOKEN
      // let decoded = jwt_decode(loginstorage['token']);
      // console.log(decoded);

      return true;
    } else {
      console.log('No hay token');
      alert('No tienes permiso. Logueate o registrate')
      this.router.navigate(['/home']);
      return false;
    }

  }


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }


}
