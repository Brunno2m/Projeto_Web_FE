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
  showButton: boolean = false;
  buttonOpacity: string = '0.6'

  @HostListener('window:scroll', [])

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
    if(this.buttonOpacity === '0.6'){
      this.buttonOpacity = '1.5';
    }
  }


  mouseOut(){
    if(this.buttonOpacity === '1.5'){
      this.buttonOpacity = '0.6'
    }
  }
}
