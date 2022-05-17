import { Component, OnInit } from '@angular/core';
//aqui vamos fazer referencia ao SERVICES que tem a conexao com o BACK
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  //serve para executar comando direto no HTML e suas TAGS
  movimentacoes:any;
  correntistas:any;
  correntistaSelecionado:any;

  constructor(private movimentacaoService: MovimentacaoService, 
              private correntistaService: CorrentistaService) { }

  ngOnInit(): void {

    //Aqui vai tudo que é chamado ao inicializar a página
    this.exibirCorrentistas();
   
  }

  //Metodo responsavel para pegar informações do BACK e popular o FRONT
  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntistaSelecionado.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //Metodo para listar os correntistas do BACK para o FRONT
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}