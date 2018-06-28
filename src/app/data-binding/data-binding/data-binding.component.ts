import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  items = [];
  count: number;
  goal:string;
  texto = '';

  constructor( private render: Renderer2) { 
    this.render.setStyle(document.body, 'background-color', 'dodgerblue');
  }

  ngOnInit() {
    this.count = this.items.length;
  }

  onAddItem(texto) {
    this.items.push(texto);
    console.log(this.items);
    this.texto=''
    this.count++;

  }

}
