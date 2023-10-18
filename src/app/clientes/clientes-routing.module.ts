import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../template/home/home.component';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
{ path: 'clientes-form', component: ClientesFormsComponent },
{ path: 'clientes-form/:id', component: ClientesFormsComponent },
{ path: 'clientes-lista', component: ClientesListaComponent }

// {path: 'clientes-form', loadChildren: () => import('./clientes.module').then((m) => m.ClientesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
