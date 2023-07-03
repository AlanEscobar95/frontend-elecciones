import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:number;
  nombre: string;
  isVoter: boolean;

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    this.nombre = this.tokenService.getNombreUsuario();
    this.isVoter = this.tokenService.isVoter();

  }

}













