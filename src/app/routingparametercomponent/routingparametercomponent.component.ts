import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-routingparametercomponent',
  templateUrl: './routingparametercomponent.component.html',
  styleUrls: ['./routingparametercomponent.component.css']
})
export class RoutingparametercomponentComponent implements OnInit {
  parameterarray:any=["1","2","3","4"];
  selectedrouter:any={id:String};
  queryparameter:any={value:String};

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.queryparameter=
    {
       'value':this.route.snapshot.queryParams.allowedit
    }

    this.selectedrouter=
    {
       'id':this.route.snapshot.params['id']
    }
    this.route.params.subscribe((params:Params)=>{
       this.selectedrouter.id=params['id'];
    });

    this.route.queryParams.subscribe((params:Params)=>{
       this.queryparameter.value=params['allowedit'];
    });

  }

  navigate(routeid:string)
  {
    this.router.navigate(['/routeparametercomponent',routeid],{queryParams:{allowedit:routeid},relativeTo:this.route});
  }

}
