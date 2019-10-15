import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationsComponent } from './formations.component';

const formationsRoutes: Routes = [
  { path: 'formations',  component: FormationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(formationsRoutes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
