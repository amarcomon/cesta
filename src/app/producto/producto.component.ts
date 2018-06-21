import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../modelo/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  ocultar = false; 
  btnadd = true;
  constructor() { }
  
  ngOnInit() {
  }
  
  onSubmit(f: NgForm) {
    
  }
  
  newProduct() {
    this.ocultar = true;
    this.btnadd = !this.btnadd;
  }
  dropup() {
    this.ocultar = false;
    this.btnadd = true;
  }

}
