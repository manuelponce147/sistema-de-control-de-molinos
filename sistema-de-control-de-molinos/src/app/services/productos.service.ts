import { Injectable } from '@angular/core';
import {Global} from '../global';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url:string;
  constructor(private http:HttpClient) {
    this.url=Global.url;
  } 
  obtenerProductos():Observable<any>{
    let headers= new HttpHeaders();
    return this.http.get(this.url+'producto/',{headers:headers});
  }
}
