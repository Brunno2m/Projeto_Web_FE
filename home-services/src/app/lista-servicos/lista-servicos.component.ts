import { Component, OnInit } from '@angular/core';

interface Service {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent implements OnInit {
  servicos: Service[] = [
    { id: 1, name: 'Pintura', description: 'Serviços de pintura residencial e comercial.' },
    { id: 2, name: 'Elétrica', description: 'Instalações e reparos elétricos.' },
    { id: 3, name: 'Instalações', description: 'Montagem e instalação de móveis e eletrodomésticos.' },
    { id: 4, name: 'Alvenaria', description: 'Reparos e construções em alvenaria.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
