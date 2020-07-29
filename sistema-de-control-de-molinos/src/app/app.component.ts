import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
      const ubicacion = window.location.pathname;
      const background= document.body;
      console.log(ubicacion);
      
      if(ubicacion=="/signin"){
        background.setAttribute("style", "background-image: url('../assets/background.jpg');background-repeat: no-repeat;background-size: 100% 100%");

      }else{
        if(ubicacion=="/signup"){
   
          background.setAttribute("style", "background-image: url('../assets/register2.jpg');background-repeat: no-repeat;background-size: 100% 100%");

  
        }
       
      }
      

    }
}
