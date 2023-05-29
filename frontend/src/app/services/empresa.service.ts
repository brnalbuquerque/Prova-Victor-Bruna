import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {}

  criarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  listarEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }
}
