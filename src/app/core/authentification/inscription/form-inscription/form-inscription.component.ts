import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/services/custom-validators';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {
  public formRegister: FormGroup;
  submitted = false;
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.formRegister = this.createSignupForm();
  }

  get f() { return this.formRegister.controls; }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        prenom: [
          null,
          Validators.compose([Validators.required])
        ],
        nom: [
          null,
          Validators.compose([Validators.required])
        ],
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        checkCgu: [
          null,
          Validators.compose([Validators.required])
        ],
        checkPpdp: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // Vérifie si le mot-de-passe entré contient une lettre majuscule
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // Vérifie si le mot-de-passe entré contient une lettre minuscule
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            Validators.minLength(6)
          ])
        ],
      },
    );
  }

  submitFormulaireInscription() {
    this.submitted = true;
    console.log(this.formRegister.value);
  }

  ngOnInit() {
  }

}
