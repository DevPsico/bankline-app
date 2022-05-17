import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//aqui importamos os COMPONENTES para colcoar as ROTAS, ao clicar nos botoes
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { CorrentistaComponent } from './components/correntista/correntista.component';


const routes: Routes = [

  //AMARELO = como vamos chamar esse componente na URL AZUL: qual o nome do componente
  {path: 'movimentacoes-new', component: MovimentacaoNewComponent},
  {path: 'movimentacoes', component: MovimentacaoListComponent},
  {path: 'correntistas', component:CorrentistaComponent},
  //Caso nao localize os componente ou de ERRO redirecionar para movimentacoes
  {path: '', redirectTo: 'movimentacoes', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
