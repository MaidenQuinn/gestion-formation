import { NgModule } from '@angular/core';

import { DescriptionComponent } from './description/description.component';
import { ResumeCardsComponent } from './resume-cards/resume-cards.component';
import { ResumeCardsItemComponent } from './resume-cards/resume-cards-item/resume-cards-item.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil.component';

import { SharedModule } from '../shared/shared.module';
import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  declarations: [
    AccueilComponent,
    DescriptionComponent,
    ResumeCardsComponent,
    AboutComponent,
    ResumeCardsItemComponent
  ],
  imports: [
    SharedModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
