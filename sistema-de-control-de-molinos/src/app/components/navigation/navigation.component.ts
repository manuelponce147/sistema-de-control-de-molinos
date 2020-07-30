import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'sistema-de-control-de-molinos';
  public opened: boolean = false;
  public closeOnClickOutside=false;
  
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
  this.opened = !this.opened;
  }
  cerrarSesion(){
    console.log(localStorage.getItem('auth-token'));
    this.authservice.logout();
   
    
  }
 


}
