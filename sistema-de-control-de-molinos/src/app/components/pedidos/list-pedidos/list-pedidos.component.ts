import { Component, OnInit  } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/photo';
import { Route } from '@angular/router';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css']
})
export class ListPedidosComponent implements OnInit {
  misPedidos: any;
  id: string;
  formProducto: FormGroup;
  producto:Photo;
  img:string='./assets/no-image.png';

  constructor(private pedidoService: PedidoService,private photoService: PhotoService, private authService: AuthService, private formBuilder: FormBuilder) {
    this.formProducto = this.formBuilder.group({
      nombre: {value:'',disabled:true},
      description: {value:'',disabled:true},
      precio: {value:'',disabled:true},
      photoInput: {value:'',disabled:true},

    });
  }


  ngOnInit(): void {

    this.id = this.authService.getUserID();
    this.pedidoService.getMisPedidos(this.id).subscribe(res => {
      this.misPedidos = res;

    },
      err => console.log(err)
    );

  }
  cargarProducto(id: string) {
    this.id = id;
    this.photoService.getPhoto(id).subscribe(
      res => {
        this.producto=res;
      }
    );
    setTimeout(()=>{this.actualizar()},1000)


  }
  actualizar(){
    this.formProducto.patchValue({
      nombre:this.producto.title,
      description:this.producto.description,
      precio:this.producto.price,
      photoInput:this.producto.imagePath
    });
    this.img='http://localhost:3000/'+this.producto.imagePath
    
  }
  


}
