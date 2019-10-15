// tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
import { EmailContact } from '../contact.model';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public formContact: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(this.emailregex)]],
    nom: [null, Validators.required],
    sujet: [null, Validators.required],
    message: [null, [Validators.required, Validators.maxLength(750)]]
  });
  public post: any = '';
  public loading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  getErrorEmail() {
    return this.formContact.get('email').hasError('required') ? 'Ce champ est requis. Veuillez entrer un e-mail.' :
      this.formContact.get('email').hasError('pattern') ? 'Cette adresse mail n\'est pas valide.' : '';
  }

  onSubmit() {
    const email: EmailContact = this.formContact.value;
    if (this.formContact.invalid) {
      return;
    }
    this.loading = true;
    this.contactService.sendContactMail(email)
      .subscribe(
        data => {
          setTimeout(() => {
            this.alertService.success('Merci, votre message a bien été envoyé ! Nous vous recontacterons au plus vite.', true);
          }, 10);
          this.loading = false;
          this.post = email;
        },
        error => {
          this.alertService.error('Une erreur est survenue lors de l\'envoie du message.', true);
          this.loading = false;
        });
    this.formContact.reset();
    Object.keys(this.formContact.controls).forEach(key => {
      this.formContact.controls[key].setErrors(null);
    });
  }

}
