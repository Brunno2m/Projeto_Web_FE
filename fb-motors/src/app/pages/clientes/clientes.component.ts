import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Mensageiro } from '../../models/mensagem';
import { NgFor } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/clientes';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = []
  messengers: Mensageiro[]

  constructor( // Construtor para chamar os serviços de contato e cliente
    private contatoService: ContatoService,
    private clienteService: ClientesService){
    this.messengers = this.contatoService.getMessengers();
  }

  ngOnInit(): void { // ngOnInit inicia a página já com as informações da api
    this.onGetClientes();
  }

  onGetClientes(): void { // Função para chamar os dados da api
    this.clienteService.getClientes().subscribe({
      next: (dados) => {
        this.clientes = dados
      },
      error: (erro) => {
        console.log(erro)
      },
      complete: () => {
        console.log('Chamada Finalizada')
      }
    })
  }
}
