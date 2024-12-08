import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [ContactFormComponent]
})
export class FooterComponent {
  // Componente responsável pelo footer
}
