import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const rol = authService.getRole();

  if (rol?.toUpperCase() === 'ADMIN') {
    return true;
  }

  router.navigate(['/perfil']);
  return false;
};
