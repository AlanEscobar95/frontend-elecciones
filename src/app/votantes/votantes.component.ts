import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-votantes',
  templateUrl: './votantes.component.html',
  styleUrls: ['./votantes.component.css']
})
export class VotantesComponent {

  carreras: any[]; // Arreglo para almacenar las opciones del combo
  selectedCarrera: any[]; // Arreglo para almacenar las opciones seleccionadas
  jornadas: any[]; 
  selectedJornada: any[]; 

  constructor() {
    // Inicializar los arreglos 
    this.carreras = [
      { name: 'Desarrollo de Software', value: '1' },
      { name: 'Marketing', value: '2' },
      { name: 'Turismo', value: '3' },
      { name: 'Gastronomia', value: '4' }
    ];
    this.selectedCarrera = [
      { name: 'Desarrollo de Software', value: '1' } // Valor preseleccionado
    ];

    // Inicializar los arreglos 
    this.jornadas = [
      { name: 'Matutina', value: '1' },
      { name: 'Vespertina', value: '2' },
      { name: 'Nocturna', value: '3' },
    ];
    this.selectedJornada = [
      { name: 'Matutina', value: '1' } // Valor preseleccionado
    ];
  }


  // ============================================================
}


