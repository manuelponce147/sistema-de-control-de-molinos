import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user ={
    name:'',
    email:'',
    password:''
  }

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  signup(){
    this.authService.signup(this.user).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token-auth',res.token);
        this.router.navigate(['/signin']);

        
      },
      err=>{
        console.log(err);
        
      }
    );
    }  

}
