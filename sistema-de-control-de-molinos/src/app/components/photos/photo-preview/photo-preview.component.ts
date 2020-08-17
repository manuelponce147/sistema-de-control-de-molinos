import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {


  id: string;
  photo: Photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        Swal.fire({
          title:'Se ha eliminado exitosamente el producto!!',
          icon:'success'
        });
        this.router.navigate(['/catalogo']);
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        Swal.fire({
          title:'Se ha editado exitosamente el producto!!',
          icon:'success'
        });
        this.router.navigate(['/catalogo']);
      });
    return false;
  }
}


