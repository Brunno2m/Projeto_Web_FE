import { Injectable } from '@angular/core';
import { Mensageiro } from '../models/mensagem';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  // Criando uma lista privada de mensageiros e criando 2 funções, uma para receber o mensageiro e outra para adicioná-lo a lista

  private messengers: Mensageiro[] = [];

  getMessengers(): Mensageiro[] {
    return this.messengers;
  }

  addMessengers(mensageiro: Mensageiro): void {
    this.messengers.push(mensageiro)
  }
}
