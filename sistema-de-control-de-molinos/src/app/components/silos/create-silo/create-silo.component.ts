import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiloService } from 'src/app/services/silo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-create-silo',
  templateUrl: './create-silo.component.html',
  styleUrls: ['./create-silo.component.css']
})
export class CreateSiloComponent implements OnInit {
  formSilo:FormGroup;
  productos:any[];
  constructor(private photoService:PhotoService,private siloService:SiloService,
    private formBuilder:FormBuilder,private router: Router){
      this.formSilo=this.formBuilder.group({
        nombre:['',[Validators.required]],
        capacidadTotal:['',[Validators.required]],
        stock:['',[Validators.required]],
        tipoProducto:['',[Validators.required]],
        estado:['',[Validators.required]]
      })
    }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(res=>{
      this.productos=res;
    });
  }
  onSubmit(){
    console.log(this.formSilo.value);

    this.siloService.createSilo(this.formSilo.value)
      .subscribe( (data)=>{
        console.log("imprimiendo resultado");
        console.log(data)
        this.formSilo.reset();
        Swal.fire({
          icon:'success',
          title:'Se han registrado los datos existosamente!!'
        })

    },
    err=>{
      Swal.fire({
        icon:'error',
        title:'No se ha podido registrar la información'
      })
    });
    this.router.navigate(['/silos']);
  }

}
