import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareasURL= environment.tareasURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tarea[]> {
    return this.httpClient.get<Tarea[]>(`${this.tareasURL}`);
  }

  public detail(id: number): Observable<Tarea> {
    return this.httpClient.get<Tarea>(`${this.tareasURL}${id}`);
  }

  public save(tarea:Tarea): Observable<any> {
    return this.httpClient.post<any>(`${this.tareasURL}`, tarea);
  }

  public update(id: number, tarea: Tarea): Observable<any> {
    return this.httpClient.put<any>(`${this.tareasURL}${id}`, tarea);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.tareasURL}${id}`);
  }
}
