import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnChanges {
  title = 'sistema-de-control-de-molinos';
  public opened: boolean = false;
  public closeOnClickOutside = false;
  public token: any;
  isRegular:boolean;
  status: boolean;
  constructor(public authservice: AuthService) {


  }

  ngOnInit(): void {
    this.cargarcomponentes();
  


  }
  ngOnChanges(){
    this.cargarcomponentes();
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }
  cerrarSesion() {
    console.log(localStorage.getItem('auth-token'));
    this.authservice.logout();


  }
  cargarcomponentes() {
    this.token = this.authservice.getToken();
    const user = this.authservice.getUserRole();
    if (this.token != null) {
      this.status = true;
    } else {
      this.status = false;
    }
    if(user=="regular"){
      this.isRegular=true;
    }else{
      this.isRegular=false;
    }
    
  }



}
