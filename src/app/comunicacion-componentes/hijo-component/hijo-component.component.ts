import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  templateUrl: './hijo-component.component.html',
  styleUrls: ['./hijo-component.component.css']
})
export class HijoComponentComponent implements OnInit {

  mensaje: string = 'soy el componente hijo';
  nombrehijo:string = 'pepito';
  num: number = 0;

  constructor() { }

  @Input() nombre:string;
  ngOnInit() {
  this.mensaje = this.mensaje+' '+this.nombre;
  }

  cambioMensaje(mensaje) {
    this.mensaje = mensaje;
  }

  suma() {
    this.num++;
  }

}
