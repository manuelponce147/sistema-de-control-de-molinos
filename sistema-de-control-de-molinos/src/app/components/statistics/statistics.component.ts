import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Producto } from '../../models/producto';
import { PesajeService } from '../../services/pesaje.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  productos:any[];
  pesajes:any[];
  meses:any[];
  constructor(private photoService:PhotoService,private pesajeService:PesajeService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(res=>{
      this.productos=res;
    });
    this.pesajeService.obtenerPesajes().subscribe(res=>{
      this.pesajes=res;
      console.log(res);
    });

  }
  aplicar(value:string):void{
    console.log(value);
  }

}
