//Ijetamos a opções do BACK no FRONT
import { Injectable } from '@angular/core';
//comunicação do BACK com o FRONT via HTTP
import { HttpClient } from '@angular/common/http';
//p observar o BACK do FRONT
import { Observable } from 'rxjs';

//Comunicação ainda tá local, vamos deixar tudo ON no HEROKU
//const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://bankline-api-ericson.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  //costrutor p pegar as informações localmente, vamos mudar p deixar ON
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {

    //concatenar a URL com o local do BACK
    return this.http.get(`${baseUrl}/correntistas`);
  }

  //CREATE é o SAVE do CORRENTISTA.COMPONENT.TS
  create(correntista:any): Observable<any> {
    return this.http.post(`${baseUrl}/correntistas`,correntista);
  }
}