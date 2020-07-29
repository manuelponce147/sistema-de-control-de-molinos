import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
      if(window.location.pathname=="/signin"){
        document.body.style.backgroundImage="url('../assets/background.jpg')";
      }
      console.log(window.location.pathname);

    }
}
