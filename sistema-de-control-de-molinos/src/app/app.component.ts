import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  
  constructor() {
   
    if (window.location.pathname == "/signin") {
      document.body.setAttribute("style", "background-image: url('../assets/background.jpg');background-repeat: no-repeat;background-size: 100% 100%");

    } else {
      if (window.location.pathname == "/signup") {

        document.body.setAttribute("style", "background-image: url('../assets/register2.jpg');background-repeat: no-repeat;background-size: 100% 100%");


      }

    }
  }
  ngOnChanges(){
    
    if (window.location.pathname == "/signin") {
      document.body.setAttribute("style", "background-image: url('../assets/background.jpg');background-repeat: no-repeat;background-size: 100% 100%");

    } else {
      if (window.location.pathname == "/signup") {

        document.body.setAttribute("style", "background-image: url('../assets/register2.jpg');background-repeat: no-repeat;background-size: 100% 100%");


      }

    }
  }
 

  








}
