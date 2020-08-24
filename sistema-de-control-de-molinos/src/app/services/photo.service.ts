import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
import {Photo} from './../interfaces/photo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  createPhoto(title: string, description: string, price:string,stock:string,photo: File) {
    const fd = new FormData();    
    fd.append('title', title);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('stock', stock);
    fd.append('image', photo);
    let auth=localStorage.getItem("auth-token");
    console.log(JSON.stringify(fd));
  
    return this.http.post(this.url + "photos", fd)


  }
  createProducto(producto:any){
    return this.http.post(this.url+'photos',producto)
  }
  getPhotos() {
    return this.http.get<Photo[]>(this.url+'photos');
  }

  getPhoto(id: string):Observable<Photo> {

    return this.http.get<Photo>(this.url+'photos/'+id);
  }

  deletePhoto(id: string) {
    return this.http.delete(this.url+'photos/'+id);
  }

  updatePhoto(id: string, title: string, description: string, price:string,stock:string) {
    return this.http.put(this.url+'photos/'+id, { title, description ,price,stock});
  }
}
