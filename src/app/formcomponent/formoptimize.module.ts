import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './../auth-guard.service';

import { FormcomponentComponent } from './formcomponent.component';

const formRoutes: Routes = [
  { path: '', component: FormcomponentComponent , canDeactivate: [AuthGuard] }
];


@NgModule({
  declarations: [FormcomponentComponent],
  imports: [CommonModule, FormsModule,RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class FormoptimizeModule {}
