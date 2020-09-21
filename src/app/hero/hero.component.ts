import { Component, OnInit, HostListener } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  constructor(public registroService: RegistroService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 85) {
      let element = document.querySelector('.navbar');
      element.classList.add('sticky');
    } else {
      let element = document.querySelector('.navbar');
      element.classList.remove('sticky');
    }
  }

  cerrarSesion() {
    localStorage.removeItem("UsuarioscRoutes");
    // const response = await localStorage.clear();
  }
}
