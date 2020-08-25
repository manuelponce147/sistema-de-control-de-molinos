import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from "rxjs";
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string;

  constructor(private http:HttpClient) { 
      this.url=Global.url;
  }

  getUsers():Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.get(this.url+'usersInfo',{headers:headers});

  }
  getUsersData():Observable<IUser>{
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.get<IUser>(this.url+'users',{headers:headers});

  }
  changeRole(userRole:string, id:string):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(this.url+'user/'+id,userRole,{headers:headers});

  }
  NewPassword(email:string):Observable<any>{
    return this.http.post(this.url+'newpass',email);

  }
}
