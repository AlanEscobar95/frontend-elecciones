import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  cargoURL= environment.cargoURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cargo[]> {
    return this.httpClient.get<Cargo[]>(`${this.cargoURL}`);
  }

  public detail(id: number): Observable<Cargo> {
    return this.httpClient.get<Cargo>(`${this.cargoURL}${id}`);
  }

  public save(cargo: Cargo): Observable<any> {
    return this.httpClient.post<any>(`${this.cargoURL}`, cargo);
  }

  public update(id: number, cargo: Cargo): Observable<any> {
    return this.httpClient.put<any>(`${this.cargoURL}${id}`, cargo);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cargoURL}${id}`);
  }
}
