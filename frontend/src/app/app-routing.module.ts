import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { FormularioEmpresaComponent } from './formulario-empresa/formulario-empresa.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'listar-empresas', component: ListaEmpresasComponent },
  { path: 'criar-empresa', component: FormularioEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
