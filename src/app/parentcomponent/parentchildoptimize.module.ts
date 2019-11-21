import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentchildconfigModule } from './parentchildconfig.module';
import { FormsModule } from '@angular/forms';

import { ParentcomponentComponent } from './parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { Child1componentComponent } from './child1component/child1component.component';

@NgModule({
  declarations: [ParentcomponentComponent, ChildcomponentComponent, Child1componentComponent],
  imports: [CommonModule, FormsModule, ParentchildconfigModule]
})
export class ParentchildoptimizeModule {}
