import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  apiURL: string = '';

  constructor(public httpClient: HttpClient) {}

  obterTodasReceita() {
    return this.httpClient.get(this.apiURL);
  }

  obterReceitaPorId(id: string) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  salvarReceita(receita: any) {
    return this.httpClient.post(this.apiURL, receita);
  }

  atualizarReceita(receita: any) {
    return this.httpClient.put(this.apiURL + '/' + receita.id, receita);
  }

  removerReceita(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }
}
