import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [ContactFormComponent, BackToTopComponent]
})
export class FooterComponent {
  // Componente responsável pelo footer
}
