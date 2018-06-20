import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listas-guardadas',
  templateUrl: './listas-guardadas.component.html',
  styleUrls: ['./listas-guardadas.component.css']
})
export class ListasGuardadasComponent implements OnInit {

  listasGuardadas = [];
  nombreListas = [];
  toggle = true;
  constructor( private dataService: DataService) { }

  ngOnInit() {  
    
    this.dataService.getLists().subscribe( (listas) => {
    this.listasGuardadas = this.dataService.listasServer;
    console.log(this.listasGuardadas);
    
    });

    this.dataService.getListNames().subscribe( (nombres) => {
      this.nombreListas = this.dataService.nombreListas;
    });
  }

  toggleList() {
    this.toggle = !this.toggle;
  }
}
