import { Icliente } from "./icliente";

export class Cliente implements Icliente {
  id: number = 0;
  nome: string = '';
  cpf: string = '';
  dataCadastro: string = '';
}
