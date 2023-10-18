import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelecionado!: Cliente;
  mensagemSucesso!: string;
  mensagemError!: string;

  constructor(
    private service: ClienteService,
    private router: Router,) {}
  ngOnInit(): void {
     this.service
     .getClientes()
     .subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe({
        next: (response: any) => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
          // Lide com o sucesso aqui
        },
        error: (erro: any) => {
          this.mensagemError = 'Ocorreu um erro ao deletar o cliente'
          // Lide com o erro aqui
        }
      });
  }


}
