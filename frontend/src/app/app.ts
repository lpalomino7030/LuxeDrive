import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headers } from './headers/headers';
import { Footers } from './footers/footers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headers, Footers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LuxeDrive');
}
