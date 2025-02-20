import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensageiro } from '../../models/mensagem';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  // Esse forms é feito com FormGroup e FormControl

  mensageiroForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contatoService: ContatoService
  ) {
    this.mensageiroForm = new FormGroup({  // Aqui o FormGroup é criado com FormControls dentro, os Validators são para o sistema validar se o que o usuário digitar está correto.
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensagem: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void { // Essa função serve para subscrever os dados digitados pelo usuário no forms
    if(this.mensageiroForm.valid){
      const mensageiro: Mensageiro = new Mensageiro({
        name: this.mensageiroForm.value.name,
        email: this.mensageiroForm.value.email,
        mensagem: this.mensageiroForm.value.mensagem,
      });

      this.contatoService.addMessengers(mensageiro)

      this.router.navigate(['/clientes'])
    }
  }
}