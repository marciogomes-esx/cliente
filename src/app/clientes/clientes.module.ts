import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormsComponent } from './clientes-forms/clientes-forms.component';
import { FormsModule  } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


@NgModule({
  declarations: [
    ClientesFormsComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule

  ],

  exports: [
    ClientesFormsComponent,
    ClientesListaComponent
  ],
})
export class ClientesModule { }
