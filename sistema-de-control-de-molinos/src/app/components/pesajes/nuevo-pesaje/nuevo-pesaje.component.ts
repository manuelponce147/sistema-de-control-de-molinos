import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PesajeService } from 'src/app/services/pesaje.service';
@Component({
  selector: 'app-nuevo-pesaje',
  templateUrl: './nuevo-pesaje.component.html',
  styleUrls: ['./nuevo-pesaje.component.css']
})
export class NuevoPesajeComponent implements OnInit {

  formPesaje:FormGroup;

  constructor(private pesajeService:PesajeService, private formBuilder:FormBuilder) { 
    this.formPesaje=this.formBuilder.group({
       name:['',[Validators.required]],
       rut:['',[Validators.required]],
       reason:['',[Validators.required]],
       inputs:['',[Validators.required]],
       output:['',[Validators.required]],
       transaction:['',Validators.required],
       n_vehicle:['',Validators.required],
       type_vehicle:['',Validators.required],

    })
  }

  ngOnInit(): void {
  }

  saveData(){
    console.log(this.formPesaje.value);
    
  }

}
