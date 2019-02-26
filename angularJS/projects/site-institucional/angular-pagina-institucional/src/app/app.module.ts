import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NossaVisaoModule } from 'app/nossa-visao/nossa-visao.module';
import { QuemSomosModule } from 'app/quem-somos/quem-somos.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContatoModule } from './contato/contato.module';
import { ProdutoModule } from './produto/produto.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    ProdutoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
