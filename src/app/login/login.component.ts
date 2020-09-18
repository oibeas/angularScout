import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { debounceTime } from 'rxjs/operators';
import { RegistroService } from '../registro.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;



  constructor(public registroService: RegistroService) {


    this.formularioLogin = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }


  ngOnInit(): void {
    const controlNombre = this.formularioLogin.controls.usuario;
    controlNombre.valueChanges.pipe(debounceTime(700)).subscribe(value => {
      console.log(value);
    });

    // let loginstorage = localStorage.getItem('UsuarioscRoutes');
    // loginstorage = (JSON.parse(loginstorage));
    // if (localStorage.getItem('UsuarioscRoutes')) {

    // console.log(loginstorage['token']);
    // alert('Estas logueado ' + loginstorage['usuario'])
    // }
  }


  async onSubmit() {
    // console.log(this.formularioLogin.value);
    const response = await this.registroService.postLogin(this.formularioLogin.value);
    // console.log(response);
    if (response.sucess) {
      console.log('ok');
      let datosscRoutes = {
        usuario: this.formularioLogin.value.usuario,
        token: response['token'],
        horalogin: moment().unix()
      }
      localStorage.setItem('UsuarioscRoutes', JSON.stringify(datosscRoutes));
      this.formularioLogin.reset();
      document.getElementById("closeLoginButton").click();

    } else {
      console.log('Error usuario/password');
      this.formularioLogin.reset();
    }

  }
}