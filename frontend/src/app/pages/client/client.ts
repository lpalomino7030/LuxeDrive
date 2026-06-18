import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Panel} from './panel/panel';


@Component({
  selector: 'app-client',
  imports: [Panel, RouterOutlet],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {}
