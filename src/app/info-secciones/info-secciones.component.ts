import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-info-secciones',
  templateUrl: './info-secciones.component.html',
  styleUrls: ['./info-secciones.component.css']
})
export class InfoSeccionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 10)
    });
  }

}
