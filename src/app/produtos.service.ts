import { produtos, IProduto } from './produtos';
import { Injectable } from '@angular/core';

/* criar um servico, para cuidar de todas as operacoes que estao relacionadas com os produtos
obter todos os produtos especificos atraves do id */

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll (){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id == produtoId); /* recebe o id do produto e so ira
      retornar o produto com aquele id */
  }
}
