import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Periodo } from '../models/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  periodoURL= environment.periodoURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Periodo[]> {
    return this.httpClient.get<Periodo[]>(`${this.periodoURL}`);
  }

  public detail(id: number): Observable<Periodo> {
    return this.httpClient.get<Periodo>(`${this.periodoURL}${id}`);
  }

  public save(periodo: Periodo): Observable<any> {
    return this.httpClient.post<any>(`${this.periodoURL}`, periodo);
  }

  public update(id: number, periodo: Periodo): Observable<any> {
    return this.httpClient.put<any>(`${this.periodoURL}${id}`, periodo);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.periodoURL}${id}`);
  }
}
