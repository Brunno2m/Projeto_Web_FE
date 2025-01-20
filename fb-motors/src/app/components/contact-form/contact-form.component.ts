import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Input() carModel: string = ''; // Nome do modelo de carro
  @Input() contactMessage: string = ''; // Mensagem de contato padrão
  @Output() formSubmitted = new EventEmitter<any>(); // Emite os dados do formulário

  userName: string = '';
  userEmail: string = '';
  showThankYouMessage: boolean = false;

  onSubmit() {
    const formData = {
      name: this.userName,
      email: this.userEmail,
      model: this.carModel,
      message: this.contactMessage
    };

    this.formSubmitted.emit(formData);
    this.showThankYouMessage = true; // Atualiza a condição do ngIf
  }
}