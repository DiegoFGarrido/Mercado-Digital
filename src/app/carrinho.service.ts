import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho [] = [];

  constructor() { }

  obtemCarrinho (){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //converter de 1 objeto pra 1 string
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId); /* vai percorrer todo o vetor de itens
      e cada vez que ele percorre ele disponibiliza o item especifico que ta sendo trabalhado...
      e com será filtrado o item com o id diferente do produtoId que recebe */
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
