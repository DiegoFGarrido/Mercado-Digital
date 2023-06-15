import { CarrinhoService } from './../carrinho.service';
import { IProdutoCarrinho } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
    /* percorre todos os itens do carrinho, verifica o preco do item e quantidade de elementos daquele item
      REDUCE percorre todos os elementos e traz o elemento anterior e o atual -- soma o que calculou anterior-
      mente com o que ta calculando agora. O CURR será um item do carrinho */
  }

  comprar(){
    alert("Parabens, Voce finalizou a sua comprar!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}

/*ng g module carrinho --route carrinho --module app.module */
