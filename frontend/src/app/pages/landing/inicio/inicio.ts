import { Component } from '@angular/core';
import { Footers } from '../footers/footers';
import { Headers } from '../headers/headers';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [Footers, Headers, RouterOutlet],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
