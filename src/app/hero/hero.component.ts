import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  constructor() { }

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
}
