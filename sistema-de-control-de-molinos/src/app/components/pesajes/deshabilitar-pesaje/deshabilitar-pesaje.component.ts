import { Component, OnInit } from '@angular/core';
import { Pesaje } from 'src/app/models/pesaje';
import { PesajeService } from 'src/app/services/pesaje.service';
import {Global} from '../../../global';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deshabilitar-pesaje',
  templateUrl: './deshabilitar-pesaje.component.html',
  styleUrls: ['./deshabilitar-pesaje.component.css']
})
export class DeshabilitarPesajeComponent implements OnInit {
  public pesajes:Pesaje[];
  public url:string;
  formPesaje:FormGroup;


  constructor(private pesajeService:PesajeService, private formBuilder:FormBuilder ){
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

   })
   }

  ngOnInit(): void {
    this.getPesajes();
  }
  getPesajes(){
    this.pesajeService.obtenerPesajes().subscribe(
      response=>{
        if(response.pesajes){
          this.pesajes=response.pesajes;
          console.log(this.pesajes);
          
        }
      },error=>{
        console.log(<any>error);
        
      }
    )
  }
  eliminar(id:any){
    this.pesajeService.deletePesaje(id).subscribe(
      res=>{
        console.log(res);
        this.getPesajes();
 
      }
    )

  }

  onSubmit(){}

}
