import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Empresa {
  empresa: string;
  categoria: string;
}

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {
  empresas: Empresa[] = []; // Inicializando como um array vazio

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarEmpresas();
  }

  carregarEmpresas(): void {
    this.http.get<Empresa[]>('http://localhost:3000/empresas')
      .subscribe(
        response => {
          this.empresas = response;
        },
        error => {
          console.error('Erro ao carregar empresas', error);
        }
      );
  }
}
