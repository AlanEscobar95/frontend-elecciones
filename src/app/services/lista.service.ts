import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from '../models/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  listaURL= environment.listaURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(`${this.listaURL}`);
  }

  public detail(id: number): Observable<Lista> {
    return this.httpClient.get<Lista>(`${this.listaURL}${id}`);
  }

  public save(lista: Lista): Observable<any> {
    return this.httpClient.post<any>(`${this.listaURL}`, lista);
  }

  public update(id: number, lista: Lista): Observable<any> {
    return this.httpClient.put<any>(`${this.listaURL}${id}`, lista);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.listaURL}${id}`);
  }
}
