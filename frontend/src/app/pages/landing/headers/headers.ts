import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [],
  templateUrl: './headers.html',
  styleUrl: './headers.css',
})
export class Headers {
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
