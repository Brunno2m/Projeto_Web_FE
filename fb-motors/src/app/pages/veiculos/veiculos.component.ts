import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarrosService } from '../../services/carros.service';

@Component({
  selector: 'app-veiculos',
  standalone: true, // componentes standalone são os componentes nas novas versões do angular que não é mais feita a importação no NgModule e sim nos próprios compoenentes
  imports: [ NgFor,],  //aqui é feita a importação de modulos para utilização no component angular. Neste caso o commom module é utilizando para que possamos utilizar o NgFor no HTML
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent {
  // Array de carros para exibição simulando a venda de carros
  carros: any[] = []

  constructor(private carroService:CarrosService){
    this.carros = carroService.getCarros();
  }

  // Função para simular a ação de adicionar o carro ao carrinho
  adicionarAoCarrinho(carro: any) {
    alert(`${carro.nome} foi adicionado ao carrinho!`);

    // Aqui abaixo segue o código para a implentação da inclusão do carro de interesse cadastrado no banco de dados no carrinho
  }
}
