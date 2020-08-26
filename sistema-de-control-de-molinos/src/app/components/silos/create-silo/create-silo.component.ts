import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiloService } from 'src/app/services/silo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-silo',
  templateUrl: './create-silo.component.html',
  styleUrls: ['./create-silo.component.css']
})
export class CreateSiloComponent implements OnInit {
  formSilo:FormGroup;

  constructor(private siloService:SiloService,
    private formBuilder:FormBuilder){ 
      this.formSilo=this.formBuilder.group({
        nombre:['',[Validators.required]],
        capacidadTotal:['',[Validators.required]],
        stock:['',[Validators.required]],
        tipoProducto:['',[Validators.required]],
        estado:['',[Validators.required]]
      })
    }

  ngOnInit(): void {
  }
  onSubmit(){
 
    
    this.siloService.createSilo(this.formSilo.value)
      .subscribe( (data)=>{
    
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
  }

}
