import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalConnexionComponent } from '../core/authentification/connexion/modal-connexion/modal-connexion.component';
import { ModalInscriptionComponent } from '../core/authentification/inscription/modal-inscription/modal-inscription.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showRecherche: Boolean = false;

  constructor(
    public dialog: MatDialog,
  ) { }

  openConnectModal(): void {
    this.dialog.open(ModalConnexionComponent);
  }

  openRegisterModal(): void {
    this.dialog.open(ModalInscriptionComponent);
  }

  toggleSearchBar() {
    this.showRecherche = !this.showRecherche;
  }

  closeSearchBar() {
    this.showRecherche = false;
  }

  ngOnInit() { }

}
