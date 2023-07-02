import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;
  isVoter: boolean;
  isCandidate: boolean;

  constructor(private tokenService: TokenService, private router: Router) {}


  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.isVoter = this.tokenService.isVoter();
    this.isVoter = this.tokenService.isCandidate();
 }
  logOut(): void {
   this.tokenService.logOut();
   this.router.navigate(['/login']);
 }
}

