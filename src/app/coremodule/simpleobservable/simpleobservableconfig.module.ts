import { Routes } from '@angular/router';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleobservableComponent } from './simpleobservable.component';

const simpleobservableRoutes: Routes = [{ path: 'simpleobservable', component: SimpleobservableComponent }];

@NgModule({
  imports: [RouterModule.forChild(simpleobservableRoutes)],
  exports: [RouterModule]
})
export class SimpleobservableconfigModule {}
