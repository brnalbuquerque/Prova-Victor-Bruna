import { Component } from '@angular/core';
import { EmpresaService } from '../services/empresa.service';
import { Empresa } from '../models/empresa.model';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent {
  empresa: string;
  categoria: string;
  mensagemSalvo: boolean = false;

  constructor(private empresaService: EmpresaService) {
    this.empresa = '';
    this.categoria = '';
  }

  salvarDados(): void {
    const empresa: Empresa = {
      empresa: this.empresa,
      categoria: this.categoria
    };
    this.mensagemSalvo = true;
    this.empresa = '';
    this.categoria = '';
    this.empresaService.criarEmpresa(empresa).subscribe(
      response => {
        console.log('Dados salvos com sucesso', response);
        this.mensagemSalvo = true;

      },
      error => {
        console.error('Erro ao salvar os dados', error);
      }
    );
  }
}
