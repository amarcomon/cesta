import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Lista } from '../modelo/Lista';
import { DataService } from '../data-service';
import { Producto } from '../modelo/Producto';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
  nombre: string = '';
  producto:string = '';
  cantidad: number = null;
  item: Lista = null ;
  listaProd: Array<Lista> = [];
  productos: Array<Producto>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProduct().subscribe((data) => this.productos = data)
  }

  onSubmit(f: NgForm) {
    this.nombre = f.value.nombre;
    this.producto = f.value.producto;
    this.cantidad = f.value.cantidad;
    this.item = new Lista(this.nombre, this.producto, this.cantidad);
    this.listaProd.push(this.item);
    f.controls['producto'].reset();
    f.controls['cantidad'].reset();
  }

  newList() {
    this.listaProd = [];
    this.nombre = '';
  }

  guardarListaCompra() {
    this.dataService.saveList(this.listaProd).subscribe((results) => {

    });
    
  }
}
