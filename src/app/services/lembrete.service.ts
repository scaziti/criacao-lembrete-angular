import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]>{
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  // Aqui ele retorna um Observable do tipo lembrete
  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`
    return this.http.get<Lembrete>(url);
  }

  // No post preciso passar o parametro lembrete
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}
