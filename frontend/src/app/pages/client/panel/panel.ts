import { Component } from '@angular/core';
import { AuthService } from '../../../login/auth-service';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  constructor(private authService: AuthService) {}

  get username(): string {
    return this.authService.getUsername();
  }
}
