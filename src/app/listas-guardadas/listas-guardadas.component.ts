import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-listas-guardadas',
  templateUrl: './listas-guardadas.component.html',
  styleUrls: ['./listas-guardadas.component.css']
})
export class ListasGuardadasComponent implements OnInit {

  listasGuardadas = [];
  nombreListas = [];
  expandedElements = [];
  listaObject;
  constructor( private dataService: DataService) { }

  ngOnInit() {  
    
    this.dataService.getLists().subscribe( (listas) => {
    this.listasGuardadas = this.dataService.listasServer;
    });
  }

  getListNames() {
    return this.listasGuardadas.map(element => element[0].nombre.toLowerCase().replace(/\s/g,'')).splice(0,4);    
  }

  getListElements(n: string) {
    this.listasGuardadas.forEach( (element) => {
       element.filter( (f) => {
         if (n == f.nombre) {
           this.listaObject = f;
        }
      });
      return this.listaObject;
    })
  }

  isExpanded(n:String) {
    return this.expandedElements.indexOf(n) != -1;
  }

  toggleList(n:String) {
    let index = this.expandedElements.indexOf(n);
    if (index == -1) {
      this.expandedElements.push(n);
    }
    else {
      this.expandedElements.splice(index, 1);
    }
  }
}
