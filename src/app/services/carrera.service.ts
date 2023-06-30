import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  carreraURL= environment.carreraURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Carrera[]> {
    return this.httpClient.get<Carrera[]>(`${this.carreraURL}`);
  }

  public detail(id: number): Observable<Carrera> {
    return this.httpClient.get<Carrera>(`${this.carreraURL}${id}`);
  }

  public save(carrera: Carrera): Observable<any> {
    return this.httpClient.post<any>(`${this.carreraURL}`, carrera);
  }

  public update(id: number, cargo: Carrera): Observable<any> {
    return this.httpClient.put<any>(`${this.carreraURL}${id}`, cargo);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.carreraURL}${id}`);
  }
}
