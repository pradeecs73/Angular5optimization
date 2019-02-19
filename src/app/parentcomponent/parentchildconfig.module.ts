import {Routes} from '@angular/router';
import { NgModule,APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ParentcomponentComponent } from './parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { Child1componentComponent } from './child1component/child1component.component';
import { RoutenotfoundComponent } from './../routenotfound/routenotfound.component';
import {AuthGuard} from './../auth-guard.service';




const parentchildRoutes:Routes=[ 

        {path:'',component:ParentcomponentComponent,children:[
        {path:'child',component:ChildcomponentComponent},
        {path:'child1',component:Child1componentComponent}
      ]
   }

];

@NgModule({
  
  imports: [
   RouterModule.forChild(parentchildRoutes)
  ],
  exports:[RouterModule]
 
})

export class ParentchildconfigModule{}