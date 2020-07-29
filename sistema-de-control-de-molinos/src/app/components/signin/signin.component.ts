import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user ={
    email:'',
    password:''
  }
  constructor(private authService:AuthService,private router:Router) { 

  }

  ngOnInit(): void {
  }
  signin(){
    this.authService.signin(this.user).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token-auth',res.token);

        this.router.navigate(['/home']);

        
      },
      err=>{
        console.log(err);
        
      }
    );
    }  


}
