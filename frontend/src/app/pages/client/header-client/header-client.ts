import { Component } from '@angular/core';
import { AuthService } from '../../../login/auth-service';

@Component({
  selector: 'app-header-client',
  imports: [],
  templateUrl: './header-client.html',
  styleUrl: './header-client.css',
})
export class HeaderClient {
  constructor(private authService: AuthService) {}

  cerrarSesion() {
    this.authService.logout();
  }
}
