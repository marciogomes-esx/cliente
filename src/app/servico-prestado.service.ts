import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>('', servicoPrestado);
}
}
