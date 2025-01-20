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

  constructor(private carroService: CarrosService) {
    this.carros = carroService.getCarros();
  }

  isHovered = false

  @HostListener ('mouseenter') onMouseEnter(){
    this.isHovered = true;
  }


  @HostListener ('mouseleave') onMouseLeave(){
    this.isHovered = false;
  }
}
