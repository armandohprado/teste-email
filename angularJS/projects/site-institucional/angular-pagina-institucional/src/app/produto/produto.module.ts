import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  declarations: [
    ProdutoComponent
  ],
  exports: [ ProdutoComponent ]
})
export class ProdutoModule {
}
