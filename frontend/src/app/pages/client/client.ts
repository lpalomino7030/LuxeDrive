import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Panel} from './panel/panel';
import { HeaderClient } from './header-client/header-client';
import { Footers } from '../landing/footers/footers';


@Component({
  selector: 'app-client',
  imports: [RouterOutlet, HeaderClient, Footers],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {}
