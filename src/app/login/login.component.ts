import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private registroService: RegistroService) {

    this.formularioLogin = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }





  ngOnInit(): void {
    const controlNombre = this.formularioLogin.controls.name;
    controlNombre.valueChanges.pipe(debounceTime(700)).subscribe(value => {
      console.log(value);
    });

  }


  async onSubmit() {
    console.log(this.formularioLogin.value);
    const response = await this.registroService.postForm(this.formularioLogin.value);
    console.log(response);
    if (response.sucess) {
      console.log('ok');
      this.formularioLogin.reset();
    } else {
      return { error: 'Fallo al crear usuario' };
    }

  }
}