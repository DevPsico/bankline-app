import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
  correntistas:any;
  correntistaSelecionado:any;

  //Declaração dos atributos para o SALVAR
  valor:any;
  descricao:any;
  tipo:any;
  idConta:any;
  dataHora:any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  //Metodo para listar os correntistas no SERVICE CORRENTISTA
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

  //Metodo SALVAR CORRENTISTA na MOVIMENTAÇÂO
  save(): void {
    console.log(this.correntistas)
    const movimentacao = {

      //Atributos criado acima :any
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntistaSelecionado.id,
      dataHora:this.dataHora

    };
    console.log(movimentacao);
    this.movimentacaoService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}