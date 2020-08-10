import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegularGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}

  canActivate():boolean{
    let role=this.authService.getUserRole();
    console.log(role);
    
    if (role=="regular") {
      return true;
    }else{
      this.router.navigate(['/signin']);
      return false
    }
  }
  
}
