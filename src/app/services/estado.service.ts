import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  estadoURL = environment.estadoURL;
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(`${this.estadoURL}`);
  }

  public detail(id: number): Observable<Estado> {
    return this.httpClient.get<Estado>(`${this.estadoURL}${id}`);
  }

  public save(estado: Estado): Observable<any> {
    return this.httpClient.post<any>(`${this.estadoURL}`, estado);
  }

  public update(id: number, estado: Estado): Observable<any> {
    return this.httpClient.put<any>(`${this.estadoURL}${id}`, estado);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.estadoURL}${id}`);
  }
}
