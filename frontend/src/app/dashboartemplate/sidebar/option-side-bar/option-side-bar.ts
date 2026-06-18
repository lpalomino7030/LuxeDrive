import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-side-bar',
  imports: [],
  templateUrl: './option-side-bar.html',
  styleUrl: './option-side-bar.css',
})
export class OptionSideBar {
  @Input() texto: string = '';
  @Input() icono: string = '';
  @Input() url: string = '';
}
