import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cronograma } from '../models/cronograma';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  cronogramaURL= environment.cronogramaURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cronograma[]> {
    return this.httpClient.get<Cronograma[]>(`${this.cronogramaURL}`);
  }

  public detail(id: number): Observable<Cronograma> {
    return this.httpClient.get<Cronograma>(`${this.cronogramaURL}${id}`);
  }

  public save(cronograma: Cronograma): Observable<any> {
    return this.httpClient.post<any>(`${this.cronogramaURL}`, cronograma);
  }

  public update(id: number, cronograma: Cronograma): Observable<any> {
    return this.httpClient.put<any>(`${this.cronogramaURL}${id}`, cronograma);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cronogramaURL}${id}`);
  }
}
