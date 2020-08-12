import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido.service';
import { AuthService } from 'src/app/services/auth.service';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-create-pedidos',
  templateUrl: './create-pedidos.component.html',
  styleUrls: ['./create-pedidos.component.css']
})
export class CreatePedidosComponent implements OnInit {
  id: string;
  user: string;
  product: any;
  formPedido: FormGroup;
  cantidad: number;
  constructor(private photoService: PhotoService, private authService: AuthService, private pedidoService: PedidoService, private formBuilder: FormBuilder) {

    this.formPedido = this.formBuilder.group({
      producto: [{ value: '', disabled: true }, [Validators.required]],
      cliente: [{ value: '', disabled: true }, [Validators.required]],
      cantidad: ['', [Validators.required]],
      precio: [{ value: '', disabled: true }, [Validators.required]]
    });





  }
  cargarDatos() {
    const url = window.location.pathname;
    this.id = url.split('/')[2];
    this.user = this.authService.getUserID();


  }
  ngOnInit() {
    this.cargarDatos();
    this.getPhoto();
    setTimeout(() => {

      this.formPedido.patchValue({
        producto: this.id,
        cliente: this.user,
      })
    }, 1000);
  }

  
  generatePrice(data) {
    setTimeout(() => {
      this.cantidad = (data.target.value);
      console.log(this.cantidad);

      this.formPedido.patchValue({

        precio: this.cantidad *parseInt(this.product.price),
      })

      
    }, 2000);

  }
  getPhoto() {
    this.photoService.getPhoto(this.id).subscribe(
      response => {
        if (response) {
          this.product = response;

        }
      }, error => {
        console.log(<any>error);

      }
    )
  }
  onSubmit() { 
    console.log(this.formPedido.value);
    
    this.pedidoService.savePedido(this.formPedido.value)
    . subscribe(
      (response)=>{
        console.log("imprimiendo resultado");
        console.log(response)
        this.formPedido.reset();
    
    },
    err=>console.log(err)
    )
  }



}