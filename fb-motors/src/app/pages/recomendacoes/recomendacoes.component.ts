import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CarrosService } from '../../services/carros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recomendacoes',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.css'
})
export class RecomendacoesComponent {
  carros: any[] = []

  constructor(private carroService: CarrosService) { // Construtor para chamar o serviço da lista de carros
    this.carros = carroService.getCarros();
  }

  isHovered = false

  @HostListener ('mouseenter') onMouseEnter(){ // HostListener para fazer o efeito 3D dos cards dos carros, quando mouse sai e entra
    this.isHovered = true;
  }


  @HostListener ('mouseleave') onMouseLeave(){
    this.isHovered = false;
  }
}
