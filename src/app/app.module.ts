import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Aqui vamos importa para usar formulario no FRONT
import { FormsModule } from '@angular/forms';
//Aqui vamos importa para fazer a comunicação com o BACK via http
import { HttpClientModule } from '@angular/common/http';

//Import para criar ESTILOS no FRONT (CORES, PERSONALIZAÇÂO)
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

//impostamos a mascara R$
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CorrentistaComponent } from './components/correntista/correntista.component';

//Aqui registramos a localização
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    MovimentacaoListComponent,
    MovimentacaoNewComponent,
    CorrentistaComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule, 
    CurrencyMaskModule
  ],
  // Configuração de regiao PT-BR (BRASIL)
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
