import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { NgxMaskModule } from 'ngx-mask' //importa isso apos instalar a biblioteca


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
    //NgxMaskModule.forRoot() //importa isso apos instalar a biblioteca -- tentei usar porem deu erro
  ]
})
export class ContatoModule { }
