//p injetar as informações do BACK
import { Injectable } from '@angular/core';
//p fazer a comunicação do BACK com o FRONT via HTTP
import { HttpClient } from '@angular/common/http';
//p Observar o BACK no FRONT
import { Observable } from 'rxjs';

//aqui fazemos a comunicao com a API local, dps mudar p HEROKU deixar tudo
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  //costrutor p pegar as informações localmente, vamos mudar p deixar ON
  constructor(private http: HttpClient) { }
  
  //Metodo para listar todas as movimentações
  list(): Observable<any> {

    //concatenar a URL com o local do BACK
    return this.http.get(`${baseUrl}/movimentacoes`);
  }

  //Metodo para listar MOVIMENTAÇÔES pelo IDCONTA
  findByIdConta(idConta:any): Observable<any> {

    //concatenar a URL com o local do BACK
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }

  //Metodo para incluir uma movimentação
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
 }
}