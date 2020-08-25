import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { PesajeService } from 'src/app/services/pesaje.service';
import Swal from 'sweetalert2'; 
import { PhotoService } from 'src/app/services/photo.service';
import { RutValidator } from 'ng2-rut';
@Component({
  selector: 'app-nuevo-pesaje',
  templateUrl: './nuevo-pesaje.component.html',
  styleUrls: ['./nuevo-pesaje.component.css']
})
export class NuevoPesajeComponent implements OnInit {
  productos:any;
  formPesaje:FormGroup;

  constructor(private pesajeService:PesajeService, rutValidator: RutValidator ,private formBuilder:FormBuilder, private photoService:PhotoService) { 
    this.formPesaje=this.formBuilder.group({
       nombre:['',[Validators.required]],
       rut:['',[Validators.required,rutValidator]],
       razonSocial:['',[Validators.required]],
       pesoEntrada:['',[Validators.required]],
       pesoSalida:['',[Validators.required]],
       tipoTransaccion:['',[Validators.required]],
       patente:['',[Validators.required,Validators.maxLength(6)]],
       tipoVehiculo:['',[Validators.required]],
       tipoProducto:['',[Validators.required]]

    })
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(res=>{
      this.productos=res;
      console.log(this.productos);
      
    })
  }

  onSubmit(){
    this.pesajeService.guardarPesaje(this.formPesaje.value).
      subscribe(
        (data)=>{
          
          console.log("imprimiendo resultado");
          console.log(data)
          Swal.fire({
            title:'Se ha registrado exitosamente el pesaje!!',
            icon:'success'
          });
          
      
      })
    
  }
  

}
