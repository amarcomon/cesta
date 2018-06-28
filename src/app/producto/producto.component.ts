import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../modelo/Producto';
import { DataService } from '../data-service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  name:string = 'Hola!'
  ocultar = false; 
  btnadd = true;
  categorias = ['Pescaderia', 'Charcuteria', 'Bebidas'];
  listaProductos: Array<Producto> = [];
  producto: Producto;

  contador: number = 8;
  texto: string = 'texto random';
  texto2: string = '';


  constructor( private render: Renderer2, private dataService: DataService) { 
    this.render.setStyle(document.body, 'background-color', 'white');
  }
  
  ngOnInit() {
  }
  
  onSubmit(f: NgForm) {
    const nombre = f.value.nombre;
    const precio = f.value.precio;
    const categoria = f.value.categoria;
    const envase = f.value.envase;
    this.producto = new Producto(nombre, precio, categoria, envase);
    
    this.listaProductos.push(this.producto);
  }

  guardarProducto() {
    this.dataService.saveProduct(this.listaProductos).subscribe();
  }
  
  newProduct() {
    this.ocultar = true;
    this.btnadd = false;
  }
  
  dropup() {
    this.ocultar = false;
    this.btnadd = true;
  }


  clickevent() {
    console.log('click event');
  }

  changeevent() {
    console.log('change event');
    
  }

  copyevent() {
    alert('Te dije que no copiaras!!!')
  }
}
