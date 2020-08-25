import { Component, OnInit } from '@angular/core';
import { IPesaje } from 'src/app/interfaces/pesaje';
import { PesajeService } from 'src/app/services/pesaje.service';
import {Global} from '../../../global';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-deshabilitar-pesaje',
  templateUrl: './deshabilitar-pesaje.component.html',
  styleUrls: ['./deshabilitar-pesaje.component.css']
})
export class DeshabilitarPesajeComponent implements OnInit {
  public pesajes:IPesaje[]=[];
  public url:string;
  formPesaje:FormGroup;
  guardarId:string;
  productos:any;
  status:boolean;
  constructor(private pesajeService:PesajeService, private formBuilder:FormBuilder,private photoService:PhotoService ){
    this.url=Global.url;
    this.formPesaje=this.formBuilder.group({
      nombre:['',[Validators.required]],
      rut:['',[Validators.required]],
      razonSocial:['',[Validators.required]],
      pesoEntrada:['',[Validators.required]],
      pesoSalida:['',[Validators.required]],
      tipoTransaccion:['',Validators.required],
      patente:['',Validators.required],
      tipoVehiculo:['',Validators.required],
      tipoProducto:['',Validators.required],


   });

   }

  ngOnInit(): void {
    this.getPesajes();
    this.photoService.getPhotos().subscribe(res=>{
      this.productos=res;
    })
    if (this.pesajes.length==0) {
      this.status=true;      
    }else{
      this.status=false;
    }
  }
  getPesajes(){
    this.pesajeService.obtenerPesajes().subscribe(
      response=>{
        if(response){
          this.pesajes=response;
          
        }
      },err=>console.log(err)
    
    )
  }
  eliminar(id:any){
    this.pesajeService.deletePesaje(id).subscribe(
      res=>{
        Swal.fire({
          title:'Se ha eliminado exitosamente el pesaje!!',
          icon:'success'
        });
        this.getPesajes();


      }
    )

  }

  cargarDatos(pesaje:any, id:string){
    this.formPesaje=this.formBuilder.group({
      nombre:pesaje.nombre,
      rut:pesaje.rut,
      razonSocial:pesaje.razonSocial,
      pesoEntrada:pesaje.pesoEntrada,
      pesoSalida:pesaje.pesoSalida,
      tipoTransaccion:pesaje.tipoTransaccion,
      patente:pesaje.patente,
      tipoVehiculo:pesaje.tipoVehiculo,
      tipoProducto:pesaje.tipoProducto
    }) 
    this.guardarId=id;
 
     


  }
  onSubmit(){
    this.pesajeService.updatePesaje(this.guardarId,this.formPesaje.value).subscribe(
      res=>{
        this.getPesajes();
        document.getElementById('updatemodal').click();
        Swal.fire({
          icon:'success',
          text:'Los datos se han actualizado exitosamente!!'
        })
        
    },error=>{
      Swal.fire({
        icon:'error',
        text:'Error al actualizar los datos por favor verifique la información'
      })
    })
    
  }
  
}
