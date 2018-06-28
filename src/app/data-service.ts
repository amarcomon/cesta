import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

    url:string = 'https://cesta-afb5a.firebaseio.com/';
    listasServer = [];
    nombreListas = [];
    productos= [];

    constructor(private http: Http) {
    }
    
    saveList( lista ) {
        return this.http.put(this.url+'data.json', lista);
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
        return this.http.get(this.url+'data.json').map((response: Response) => {
            if(response.ok){
                const data = Object.values(response.json());
                const nombres = this.obtenerNombres(data);
                this.nombreListas = nombres;
            }
        })
    }

    saveProduct(producto) {
        return this.http.put(this.url+'producto.json', producto);
    }

    getProduct() {
        return this.http.get(this.url+'producto.json').map( (prod: Response) => {
            return this.productos = prod.json();
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