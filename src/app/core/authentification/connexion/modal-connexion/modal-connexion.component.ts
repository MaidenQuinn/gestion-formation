import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-connexion',
  templateUrl: './modal-connexion.component.html',
  styleUrls: ['./modal-connexion.component.css']
})
export class ModalConnexionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalConnexionComponent>) { }

    CloseConnexionModal(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
