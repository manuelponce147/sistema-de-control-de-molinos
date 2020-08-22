import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  public url:string;

  constructor(private http:HttpClient) {
    this.url=Global.url;
   }
  savePedido(pedido:any):Observable<any>{
    let params = JSON.stringify(pedido);
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.post(this.url+'pedidos',params,{headers:headers})
  }
  getPedidos():Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+'pedidos',{headers:headers});
  }
  getPedido(id:string):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.get(this.url+'pedido/'+id,{headers:headers})
  }
  deletePedido(id:string):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.delete(this.url+'pedido/'+id,{headers:headers})

  }
  getMisPedidos(id:string):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application.json');
    return this.http.get(this.url+'pedidos/'+id,{headers:headers});
  }
  setStatus(id:string):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application.json');
    return this.http.put(this.url+'pedidos/'+id, {headers:headers});
  }

}
