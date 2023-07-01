import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;
  nombre: string;


  constructor(private tokenService: TokenService, private router: Router) {}


  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.nombre = this.tokenService.getNombreUsuario();

 }
  logOut(): void {
   this.tokenService.logOut();
   this.router.navigate(['/login']);
 }
}
