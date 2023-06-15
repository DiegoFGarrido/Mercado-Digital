import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;  /* produtos: IProduto[] = produtos -- anteriormente era assim
    add a propriedade de produtos, o tipo dela será IProduto e o que tem dentro dela será os produtos */

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute //add para buscar o item
  ) { }

  ngOnInit(): void {
    //this.produtos = this.produtosService.getAll(); //alterando a funcao por conta do activatedroute
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
    const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    })
  }

}
