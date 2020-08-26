import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  @Output()
  enviarId:EventEmitter<string>=new EventEmitter<string>();
  photos: Photo[] = [];
  p:number=1;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private authservive:AuthService
  ) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    let role=this.authservive.getUserRole();
    if(role=="regular"){
      this.enviarId.emit(id);
      
    }else{
      this.router.navigate(['/catalogo', id]);
    }
  
    
  }


}
