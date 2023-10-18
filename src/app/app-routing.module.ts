import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { ClientesModule } from './clientes/clientes.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ClientesModule]
})
export class AppRoutingModule { }
