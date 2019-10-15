import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactChoiceComponent } from './contact/contact-choice/contact-choice.component';
import { DevisFormComponent } from './contact/devis-form/devis-form.component';
import { AlertComponent } from './alert/alert.component';

import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BypassHtmlSecurity } from './bypass-html-security';

@NgModule({
  declarations: [
    ContactComponent,
    ContactChoiceComponent,
    ContactFormComponent,
    DevisFormComponent,
    AlertComponent,
    BypassHtmlSecurity
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    ContactComponent,
    ContactFormComponent,
    DevisFormComponent,
    AppRoutingModule,
    AlertComponent,
    BypassHtmlSecurity
  ]
})
export class SharedModule { }
