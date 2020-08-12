import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserEncargadoGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}

  canActivate():boolean{
    let role=this.authService.getUserRole();
    console.log(role);
    
    if (role=="encargado"  || role=="admin") {
      return true;
    }else{
      this.router.navigate(['/home']);
      return false
    }
  }
  
}
