import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verify:boolean ;

    position: {lat: -33.431044,lng: -70.662498};
    label:{
      color:"black",
      text: "Molinos S.A"
    }

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

  }
  butonclic(){
    let isLogged= this.authService.loggedIn();
    console.log(isLogged);
    if(isLogged){
      Swal.fire({
        title:'Por favor Incia sesión o registrate para acceder al catalogo',
        icon:'info'
      });
    }else{
      let user=this.authService.getUserRole();
      console.log(user);
      if (user=='regular') {
        this.router.navigate(['pedidos']);
      }else{
        if (user=='encargado' || user=='admin') {
          this.router.navigate(['catalogo']);
        }
      }



    }
  }



}
