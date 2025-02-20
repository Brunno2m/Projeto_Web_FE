import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {

  // Esse componente é o botão para voltar para o topo da página. Todos os componentes que estiverem dentro da pasta de componentes irão aparecer em todas as paginas independente de qual for o destino da navegação do usuário.

  showButton: boolean = false;
  buttonOpacity: string = '0.6'

   @HostListener('window:scroll', []) // Esse HostListener é pra o sistema "ouvir" quando o usuário scrollar a página e o botão aparecer

  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scrollTop > 50; // Mostra o botão após 50px de rolagem
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
    });
  }

  mouseOn(){
    if(this.buttonOpacity === '0.6'){ // O mouseOn e o mouseOut são funções para ajustar a opacidade do botão, quando o usuário colocar o mouse por cima ou tirar de cima, é ativado
      this.buttonOpacity = '1.5';
    }
  }


  mouseOut(){
    if(this.buttonOpacity === '1.5'){
      this.buttonOpacity = '0.6'
    }
  }
}
