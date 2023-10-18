import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from 'src/app/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-forms',
  templateUrl: './clientes-forms.component.html',
  styleUrls: ['./clientes-forms.component.css']
})
export class ClientesFormsComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];
  id: number;

  constructor(
    private service : ClienteService,
    private router : Router,
    private activatedRoute: ActivatedRoute) {
      this.cliente = new Cliente();
      this.id = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params && params['id']) {
          this.id = params['id'];
          this.service.getClienteById(this.id).subscribe({
            next: (response) => (this.cliente = response),
            error: (errorResponse) => (this.cliente = new Cliente()),
          });
        }
      },
    });
  }
  
  onSubmit() {
  if (this.id) {
    this.service.atualizar(this.cliente).subscribe({
      next: (response: any) => {
        this.success = true;
        this.errors = [];
      },
      error: (errorResponse: any) => {
        this.success = false;
        this.errors = ['Erro ao atualizar o cliente'];
      },
    });
  } else {


    this.service
    .salvar(this.cliente)
      .subscribe({
        next: (response: any) => {
          this.success = true;
          this.errors = [];
          this.cliente = response;
          console.log(response);
        },
        error: (errorResponse: any) => {
          this.success = false;
          this.errors = errorResponse.error.errors
          }
      });
  }
}

  voltarListagem(){
    this.router.navigate(['/clientes-lista']);
  }


}

