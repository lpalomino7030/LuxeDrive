import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headers } from './headers/headers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LuxeDrive');
}
