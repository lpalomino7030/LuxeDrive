import { Component } from '@angular/core';
import { AuthService } from '../../../login/auth-service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header-client',
  imports: [UpperCasePipe],
  templateUrl: './header-client.html',
  styleUrl: './header-client.css',
})
export class HeaderClient {
  constructor(private authService: AuthService) {}

  cerrarSesion() {
    this.authService.logout();
  }

  get username(): string {
    return this.authService.getUsername();
  }
}
