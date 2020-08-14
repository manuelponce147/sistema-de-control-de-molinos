import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService:AuthService) { }

  ngOnInit(): void { 
    this.verify=this.authService.verifyRegular();

  }



}
