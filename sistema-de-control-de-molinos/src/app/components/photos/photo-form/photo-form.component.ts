import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import Swal from "sweetalert2";

interface HtmlInputEvent extends Event {
  target:HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  file:File;
  photoSelected:ArrayBuffer | string;
  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
  }
  onPhotoSelected(event:HtmlInputEvent){
    if(event.target.files && event.target.files[0]){
        this.file=<File>event.target.files[0];

        const reader=new FileReader();
        reader.onload= e => this.photoSelected = reader.result;
        reader.readAsDataURL(this.file);
        
    }
  }
  uploadPhoto(title:HTMLInputElement, description:HTMLInputElement,price:HTMLInputElement, stock:HTMLInputElement):boolean{
    
    if(typeof this.file==="undefined" || title.value=="" || description.value=="" || price.value=="" || stock.value=="" ){
      Swal.fire({
        title:`${'Por favor complete todos los campos'}`,
        icon:'error'
      });
    }else{
      this.photoService.createPhoto(title.value,description.value,price.value,stock.value,this.file)
          .subscribe(
              res=>{
                Swal.fire({
                  title:'Se ha registrado exitosamente el producto!!',
                  icon:'success'
                });
                window.open ('catalogo', '_self');
              }
                
          )

    }
     
    
          
          return false;
      
      
  }

}
