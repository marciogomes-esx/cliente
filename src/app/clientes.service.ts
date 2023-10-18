import { Injectable } from '@angular/core';
import { Cliente } from './clientes/model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private API = 'http://localhost:8080/api/clientes';

  constructor(
    private http: HttpClient ) {

    }

    salvar( cliente: Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    }

    atualizar(cliente: Cliente) : Observable<any> {
      return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
    }

    getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
    }

    getClienteById(id: number) : Observable<Cliente> {
      return this.http.get<Cliente>(`http://localhost:8080/api/clientes/${id}`);
    }

    deletar(cliente: Cliente) : Observable<any> {
      return this.http.delete<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`);
    }


  // getClientes(): Cliente[] {
  //   let cliente = new Cliente();
  //   cliente.id = 1;
  //   cliente.nome = 'Chau';
  //   cliente.dataCadastro = new Date().toISOString();
  //   cliente.cpf = '11111111111';
  //   return [cliente];
  // }



}
