import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  public formConnect: FormGroup;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.formConnect = this.connectForm();
  }

  get f() { return this.formConnect.controls; }

  connectForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.required])
        ],
        password: [
          null,
          Validators.compose([Validators.required])
        ]
      }
    );
  }

  submitFormulaireConnexion() {
    this.isLoginFailed = true;
  }

  ngOnInit() { }

}
