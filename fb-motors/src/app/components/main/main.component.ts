import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true, // componentes standalone são os componentes nas novas versões do angular que não é mais feita a importação no NgModule e sim nos próprios compoenentes
  imports: [CommonModule], //aqui é feita a importação de modulos para utilização no component angular. Neste caso o commom module é utilizando para que possamos utilizar o NgFor no HTML
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // Array de carros para exibição simulando a venda de carros
  carros = [
    {
      nome: 'Corolla Cross',
      descricao: 'Alta performance e design moderno.',
      preco: "224.900",
      imagem: 'corollacross.jpg'
    },
    {
      nome: 'Land Rover Discovery',
      descricao: 'Espaçoso, confortável e elegante.',
      preco: "159.900",
      imagem: 'land.jpg'
    },
    {
      nome: 'Fiat Cronos',
      descricao: 'Versátil e econômico',
      preco: "78.790",
      imagem: 'cronos.jpg'
    },
    {
      nome: 'BYD Seal',
      descricao: 'Super tecnológico e design moderno',
      preco: "199.900",
      imagem: 'seal.jpg'
    },
    {
      nome: 'Volkswagen T-Cross',
      descricao: 'Arrojado e ótimo na cidade e na estrada',
      preco: "145.900",
      imagem: 'tcross.jpg'
    },
    {
      nome: 'Honda Fit',
      descricao: 'Super econômico e para toda família',
      preco: "62.900",
      imagem: 'fit.jpg'
    }
  ];

  // Função para simular a ação de adicionar o carro ao carrinho
  adicionarAoCarrinho(carro: any) {
    alert(`${carro.nome} foi adicionado ao carrinho!`);

    // Aqui abaixo segue o código para a implentação da inclusão do carro de interesse cadastrado no banco de dados no carrinho
  }
}
