import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  currentRoute:String='';

  constructor(private router: Router){}

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if( event instanceof NavigationEnd){
        this.currentRoute=event.url;
      }
    })
  }
}
