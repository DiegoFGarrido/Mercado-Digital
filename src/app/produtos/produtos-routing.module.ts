import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
    { path: '', component: ProdutosComponent },
    { path: ':id', component: DetalhesProdutoComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }


/* ng g module produtos --route produtos --module app.module

  trabalhar com lazyload e por isso está sendo criado o modulo*/
