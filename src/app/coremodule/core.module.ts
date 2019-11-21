import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommoncomponentComponent } from './commoncomponent/commoncomponent.component';
import { SimpleobservableComponent } from './simpleobservable/simpleobservable.component';
import { SimpleobservableconfigModule } from './simpleobservable/simpleobservableconfig.module';
import { AuthGuard } from './../auth-guard.service';
import { AuthService } from './../auth.service';
import { observableservice } from './../observable.service';

@NgModule({
  declarations: [CommoncomponentComponent, SimpleobservableComponent],
  imports: [CommonModule, FormsModule, SimpleobservableconfigModule],
  exports: [CommoncomponentComponent],
  providers: [AuthService, AuthGuard, observableservice]
})
export class CoreModule {}
