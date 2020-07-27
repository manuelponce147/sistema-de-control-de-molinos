import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos:Producto=[];

  constructor() {

   }

  ngOnInit(): void {

 
  }

}
