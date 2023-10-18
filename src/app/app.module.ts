import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    HttpClientModule,
    CommonModule,
    ServicoPrestadoModule,

  ],

  providers: [
    ClienteService,
    AppComponent,
    ServicoPrestadoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
