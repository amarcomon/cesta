import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { HijoComponentComponent } from '../hijo-component/hijo-component.component';

@Component({
  selector: 'app-padre-component',
  templateUrl: './padre-component.component.html',
  styleUrls: ['./padre-component.component.css']
})
export class PadreComponentComponent implements OnInit {

  @ViewChild(HijoComponentComponent) hijo:HijoComponentComponent;

  nombre:string = 'pepe';
  nomhijo:string = ''

  constructor( private render: Renderer2) { 
    this.render.setStyle(document.body, 'background-color', 'white');
  }

  ngOnInit() {

  }

  enviarMensaje() {
    this.hijo.cambioMensaje('hola, desde el componente padre');
    this.nomhijo = this.hijo.nombrehijo;
    
  }

  anade() {
    this.hijo.num++;
  }

}
