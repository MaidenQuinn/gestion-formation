import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-choice',
  templateUrl: './contact-choice.component.html',
  styleUrls: ['./contact-choice.component.css']
})
export class ContactChoiceComponent implements OnInit {
  showFormContact = false;
  showFormDevis = false;

  constructor() { }


  showContact() {
    this.showFormContact = true;
    this.showFormDevis = false;
  }

  showDevis() {
    this.showFormDevis = true;
    this.showFormContact = false;
  }

  ngOnInit() {
  }

}
