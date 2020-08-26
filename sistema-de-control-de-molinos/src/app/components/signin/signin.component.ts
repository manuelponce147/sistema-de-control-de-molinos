import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formSignin:FormGroup;
  formEmail:FormGroup;
  constructor(private authService: AuthService,private userService: UserService, private router: Router,private formBuilder:FormBuilder) {
      this.formSignin=this.formBuilder.group({
        email:['',[Validators.required]],
        password:['',[Validators.required]]
      });
      this.formEmail=this.formBuilder.group({
        email:['',[Validators.required]],
      })
  }

  ngOnInit(): void {
  }
  signin() {
     
    this.authService.signin(this.formSignin.value).subscribe(
      res => {
        localStorage.setItem('auth-token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: "Bienvenido a Pesajex!",
          icon: 'success',
          timer: 2500
        }).then((result) => {
          
            window.open('/home' , '_self' )
          
        })
        
      },
      err => {
        Swal.fire({
          title: `${err.error}`,
          icon: 'error'
        });


      }
    );
   

  }

  solicitar(){
    this.userService.NewPassword(this.formEmail.value).subscribe(res=>{
      document.getElementById('change-pass').click();
      this.formEmail.reset();
      Swal.fire({
        icon:"success",
        text:"Se ha solicitado exitosamente la nueva contraseña"
      });
      
    },
    err=>{
      
      document.getElementById('change-pass').click();
      this.formEmail.reset();
      Swal.fire({
        icon:"error",
        text:err.error
      });
      
      
    })
  }

}
