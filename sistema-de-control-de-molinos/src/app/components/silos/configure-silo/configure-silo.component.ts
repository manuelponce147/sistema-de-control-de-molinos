import { Component, OnInit } from '@angular/core';
import { SiloService } from 'src/app/services/silo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ISilo } from 'src/app/interfaces/silo';
@Component({
  selector: 'app-configure-silo',
  templateUrl: './configure-silo.component.html',
  styleUrls: ['./configure-silo.component.css']
})
export class ConfigureSiloComponent implements OnInit {
  formSilo:FormGroup;
  silos:ISilo[]=[];
  guardarId:string;
  status:boolean;
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
    this.obtenerSilos();
    if (this.silos.length==0) {
      this.status=true;      
    }else{
      this.status=false;
    }
    
  }
  obtenerSilos(){
    this.siloService.getSilos()
      .subscribe(res => {
        this.silos = res;
        
      }
        );
    
  }
  cargarDatos(silo:any, id:string){
    this.formSilo=this.formBuilder.group({
      nombre:silo.nombre,
      capacidadTotal:silo.capacidadTotal,
      stock:silo.stock,
      tipoProducto:silo.tipoProducto,
      estado:silo.estado
    }) 
    this.guardarId=id;
 
     


  }
  deleteSilo(id:string){
    this.siloService.deleteSilo(id).subscribe(
      (res)=>{
        Swal.fire({
          icon:"success",
          text:"Datos eliminados exitosamente!!"
        })
        this.obtenerSilos();
        
      }
    )
  }
  onSubmit(){
    if(this.formSilo.get('nombre').value=="" ||this.formSilo.get('capacidadTotal').value=="" ||
    this.formSilo.get('stock').value=="" || this.formSilo.get('tipoProducto').value=="" || this.formSilo.get('estado').value=="" ){
      Swal.fire({
        icon:"error",
        text:"Por favor complete todos los campos"
      });
    }else{

     this.siloService.updateSilo(this.guardarId,this.formSilo.value).subscribe(
      res=>{
        this.obtenerSilos();
        document.getElementById('updateSilo').click();
        Swal.fire({
          icon:"success",
          text:"Datos actualizados exitosamente!!"
        });
        
    })
  }
  
    }
    
  
      
    
  
  

}
