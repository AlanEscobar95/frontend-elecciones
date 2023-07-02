import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TipoLista } from '../models/tipo-lista';

@Injectable({
  providedIn: 'root'
})
export class TipoListaService {
  tipoListaURL= environment.tipoListaURL;
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoLista[]> {
    return this.httpClient.get<TipoLista[]>(`${this.tipoListaURL}`);
  }

  public detail(id: number): Observable<TipoLista> {
    return this.httpClient.get<TipoLista>(`${this.tipoListaURL}${id}`);
  }

  public save(tipoLista: TipoLista): Observable<any> {
    return this.httpClient.post<any>(`${this.tipoListaURL}`, tipoLista);
  }

  public update(id: number, tipoLista: TipoLista): Observable<any> {
    return this.httpClient.put<any>(`${this.tipoListaURL}${id}`, tipoLista);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.tipoListaURL}${id}`);
  }
}
