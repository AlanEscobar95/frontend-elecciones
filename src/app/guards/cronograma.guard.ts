import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CronogramaGuard implements CanActivate {

  realRol: string;
  

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    const userRole = this.tokenService.isAdmin() ? 'administrador' : 'candidato';
  
    if (!this.tokenService.isLogged() || !expectedRol.includes(userRole)) {
      this.router.navigate(['/']);
      return false;
    }
  
    return true;
  }
  
}