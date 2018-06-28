import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data-service';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent implements OnInit, DoCheck {

  nombre: string;
  listasGuardadas = [];
  listasFiltradas = [];

  constructor(private dataService: DataService ,private route:  ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.route.snapshot.params.nombre;
    
    this.dataService.getLists().subscribe( (listas) => {
      this.listasGuardadas = listas;
    });
  }
  
  ngDoCheck() {
    this.filtrarListas()
  }

  filtrarListas(){
    return this.listasGuardadas.filter( element => {

      if((element[0].nombre).toLowerCase().replace(/\s/g,'') === this.nombre) {
        this.listasFiltradas.push(element);
      }
    })
  }

  editarLista() {
    
  }

  

}
