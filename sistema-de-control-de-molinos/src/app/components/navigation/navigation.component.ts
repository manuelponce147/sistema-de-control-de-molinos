import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'sistema-de-control-de-molinos';
  public opened: boolean = false;
  public closeOnClickOutside=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
  this.opened = !this.opened;
  this.closeOnClickOutside=!this.closeOnClickOutside;
  }
 


}
