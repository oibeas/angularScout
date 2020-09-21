import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-info-movimiento',
  templateUrl: './info-movimiento.component.html',
  styleUrls: ['./info-movimiento.component.css']
})
export class InfoMovimientoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 20)
    });
  }

}
