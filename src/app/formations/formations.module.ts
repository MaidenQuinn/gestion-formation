import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationComponent } from './formation/formation.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationsComponent } from './formations.component';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationService } from './shared/formation.service';

@NgModule({
  declarations: [
    FormationComponent,
    FormationListComponent,
    FormationsComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule
  ],
  providers: [ FormationService ]
})
export class FormationsModule { }
