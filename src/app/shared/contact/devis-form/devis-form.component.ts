import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmailContact } from '../contact.model';
import { ContactService } from '../contact.service';
import { AlertService } from '../../alert.service';

@Component({
  selector: 'app-devis-form',
  templateUrl: './devis-form.component.html',
  styleUrls: ['./devis-form.component.css']
})
export class DevisFormComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  private emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public formContact: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.maxLength(64), Validators.pattern(this.emailregex)]],
    nom: ['', [Validators.required, Validators.maxLength(64)]],
    sujet: ['', [Validators.required, Validators.maxLength(128)]],
    message: ['', [Validators.required, Validators.maxLength(750)]],
    nbParticipants: ['', Validators.required],
    lieuFormation: ['', Validators.required],
    entreprise: ['', Validators.maxLength(64)],
    tel: ['', Validators.maxLength(12)],
    adresse: ['', Validators.maxLength(128)],
    codePostal: ['', Validators.maxLength(5)],
    ville: ['', Validators.maxLength(64)],
  });
  public post: any = '';
  public nbParticipantsList: number[];
  public loading: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private alertService: AlertService
  ) {
    this.nbParticipantsList = Array(31).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

  getErrorEmail() {
    return this.formContact.get('email').hasError('required') ? 'Ce champ est requis. Veuillez entrer un e-mail.' :
      this.formContact.get('email').hasError('pattern') ? 'Cette adresse n\'est pas valide.' : '';
  }

  onSubmit() {
    const email: EmailContact = this.formContact.value;
    if (this.formContact.invalid) {
      return;
    }
    this.loading = true;
    this.contactService.sendDevisMail(email)
      .subscribe(
        data => {
          this.alertService.success('Votre message a bien été envoyé. Nous vous enverrons une réponse au plus vite.', true);
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
