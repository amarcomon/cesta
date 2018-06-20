import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Lista } from "./modelo/Lista";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class DataService {

    url:string = 'https://cesta-afb5a.firebaseio.com/';
    listasServer = [];
    nombreListas = [];

    constructor(private http: Http) {
    }
    
    saveList( lista ) {
        return this.http.post(this.url+'data.json', lista);
    }
    
    getLists() {
        return  this.http.get(this.url+'data.json').map(
            (response: Response) => { 
                const data = response.json();
                const obj = Object.values(data);
                this.listasServer = obj;
                return obj;
            }
        );
    }

    getListNames() {
        const nombres = [];
        return  this.http.get(this.url+'data.json').map(
            (response: Response) => { 
                const data = Object.values(response.json());
                data.forEach( function (element, index, array){
                const fecha = element[index].nombre;
                nombres.push(fecha);
                return nombres; 
            });
            this.nombreListas = nombres;
        });
    }
}