import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    position: {
      lat: -33.6136239,
      lng: -70.8573218
    }
    label: {
      color: 'black',
      text: 'El molino ',
    }
    title: 'Marker title ';
    options: {
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }
  


  constructor() { }

  ngOnInit(): void { }



}
