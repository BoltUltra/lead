import { Component } from '@angular/core';

@Component({
  selector: 'app-topintl',
  templateUrl: './topintl.component.html',
  styleUrls: ['./topintl.component.css'],
})
export class TopintlComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
