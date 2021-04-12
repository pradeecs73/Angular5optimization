import { Routes } from '@angular/router';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormcomponentComponent } from './formcomponent.component';

const formRoutes: Routes = [
  { path: '', component: FormcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class FormconfigModule {}
