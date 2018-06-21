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
                if(typeof(response) !== 'undefined' || response === "null"){
                    const data = response.json();
                    const obj = Object.values(data);
                    this.listasServer = obj;
                    return obj;
                }
            }
        );
    }

    getListNames() {
        const nombres = [];
        return this.http.get(this.url+'data.json').forEach((response: Response) => {
            if(response.ok){
                const data = Object.values(response.json());
                const nombres = this.obtenerNombres(data);
                this.nombreListas = nombres;
            }
        })
    }

    private obtenerNombres( lista ) {
        var nombres =  [];
        for(var item of lista) {
            for(let c of item) {
                nombres.push(c.nombre)
            }
        }
        var filternombres = nombres.filter(function(i,pos){
            return nombres.indexOf(i) == pos;
        })
        return filternombres;
    };
}