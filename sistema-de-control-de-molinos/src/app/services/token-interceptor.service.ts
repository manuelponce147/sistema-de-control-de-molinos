import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler,HttpRequest, HttpEvent } from "@angular/common/http";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private authService:AuthService) { }
  
  intercept(req:HttpRequest<any>,next:HttpHandler){
    const tokeinzerReq=req.clone({
      setHeaders:{
        Authorization:`Beaer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokeinzerReq);

  }

}
