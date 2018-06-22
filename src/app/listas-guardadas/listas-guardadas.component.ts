import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data-service';
import { Subscription } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-listas-guardadas',
  templateUrl: './listas-guardadas.component.html',
  styleUrls: ['./listas-guardadas.component.css']
})
export class ListasGuardadasComponent implements OnInit {

  listasGuardadas = [];
  nombreListas = [];
  expandedElements = [];
  constructor( private dataService: DataService) { }

  ngOnInit() {  
    
    this.dataService.getLists().subscribe( (listas) => {
    this.listasGuardadas = this.dataService.listasServer;
    });
  }

  getListNames() {
    return this.listasGuardadas.map(element => element[0].nombre);    
  }

  getListElements(n: string) {
    return this.listasGuardadas.map( (element) => {
       let filtered = element.filter( (f) => f.nombre == n);
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
