import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  showButtonContact = true;
  showContactChoice = false;

  constructor() { }

  showFormContact() {
    this.showContactChoice = !this.showContactChoice;
    this.showButtonContact = false;
  }

  ngOnInit() { }
}
