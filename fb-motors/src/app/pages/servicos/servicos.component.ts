import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  servicos = [
    {
      nome: 'Manutenção Preventiva',
      preco: 'Dependenpendo do carro: Variação de R$ 350,00 a R$ 2.000,00',
      descricao: 'Troca de óleo e filtros, Alinhamento e balanceamento, Verificação de freios e Inspeção de suspensão',
      imagem: '/manuprev.jpg'
    },
    {
      nome: 'Reparos Elétricos',
      preco: '',
      descricao: 'Troca de Baterias, Reparo de Alternadores e Diagnóstico de Falhas no Sistema Elétrico',
      imagem: '/reparoele.jpg'
    },
    {
      nome: 'Reparo no Sistema de Arrefecimento',
      preco: '',
      descricao: 'Troca de Líquido de Arrefecimento, Reparo de vazamentos e Limpeza do Radiador',
      imagem: '/arrefecimento.jpg'
    },
    {
      nome: 'Reparos no Sistema de Freios',
      preco: '',
      descricao: 'Troca de Pastilhas e Discos de Freio, Purga do Sistema de Freio e Verificação de Mangueiras e Tubulações',
      imagem: '/freios.png'
    },
    {
      nome: 'Alinhamento e Balanceamento',
      preco: '',
      descricao: 'Alinhamento e Balanceamento',
      imagem: '/alinhamento.webp'
    },
    {
      nome: 'Instalação de Acessórios',
      preco: '',
      descricao: 'Som Automotivo, Alarmes, Rastreadores, Câmeras de Ré e Sensores de Estacionamento',
      imagem: '/instalacao.jpg'
    }
  ]

  // Função para simular a ação de adicionar o serviço ao carrinho
  adicionarAoCarrinho(servico: any) {
    alert(`${servico.nome} foi adicionado ao carrinho!`);
  }
}
