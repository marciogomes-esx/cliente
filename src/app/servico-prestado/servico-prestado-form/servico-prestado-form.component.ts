import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/model/cliente';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(
    private clienteService: ClienteService
  ){
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response);
  }

  onSubmit() {
    console.log(this.servico)
  }


}