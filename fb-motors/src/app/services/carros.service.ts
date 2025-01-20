import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  carros = [
    {
      nome: 'Corolla Cross',
      descricao: 'Alta performance e design moderno.',
      preco: "224.900",
      imagem: 'corollacross.jpg',
      path: '/corolla'
    },
    {
      nome: 'Land Rover Discovery',
      descricao: 'Espaçoso, confortável e elegante.',
      preco: "159.900",
      imagem: 'land.jpg',
      path: '/land'
    },
    {
      nome: 'Fiat Cronos',
      descricao: 'Versátil e econômico',
      preco: "78.790",
      imagem: 'cronos.jpg',
      path: '/cronos'
    },
    {
      nome: 'BYD Seal',
      descricao: 'Super tecnológico e design moderno',
      preco: "199.900",
      imagem: 'seal.jpg',
      path: '/seal'
    },
    {
      nome: 'Volkswagen T-Cross',
      descricao: 'Arrojado e ótimo na cidade e na estrada',
      preco: "145.900",
      imagem: 'tcross.jpg',
      path: '/tCross'
    },
    {
      nome: 'Honda Fit',
      descricao: 'Super econômico e para toda família',
      preco: "62.900",
      imagem: 'fit.jpg',
      path: '/fit'
    }
  ];

  getCarros(){
    return this.carros;
  }
}
