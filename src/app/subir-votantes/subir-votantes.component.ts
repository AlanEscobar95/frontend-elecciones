import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-votantes',
  templateUrl: './subir-votantes.component.html',
  styleUrls: ['./subir-votantes.component.css']
})
export class SubirVotantesComponent {
  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigate(['/']);
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
