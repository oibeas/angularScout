import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private registroService: RegistroService) {

    this.formulario = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.maxLength(45)
      ]),
      nombre: new FormControl('', [Validators.maxLength(30)]),
      apellidos: new FormControl('', [Validators.maxLength(50)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/),
      ]),
      ciudad: new FormControl('', [Validators.maxLength(45)]),
      sexo: new FormControl('',),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9@*#]{8,15})$/),
      ]),
      password_repeat: new FormControl('', [Validators.required]),
    }, [this.passwordValidator])


  }

  ngOnInit(): void {
    const controlNombre = this.formulario.controls.name;
    controlNombre.valueChanges.pipe(debounceTime(700)).subscribe(value => {
      console.log(value);
    });
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.registroService.postForm(this.formulario.value);
    console.log(response);
  }

  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const passwordRepeatValue = form.controls.password_repeat.value;
    if (passwordValue === passwordRepeatValue) {
      return null
    } else {
      return { passwordvalidator: 'Los campos de password deben ser iguales' };
    }
  }

}
