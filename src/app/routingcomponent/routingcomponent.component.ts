import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-routingcomponent',
  templateUrl: './routingcomponent.component.html',
  styleUrls: ['./routingcomponent.component.css']
})
export class RoutingcomponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  reload()
  {
    this.router.navigate(['/routecomponent'],{relativeTo:this.route});
  }

}
