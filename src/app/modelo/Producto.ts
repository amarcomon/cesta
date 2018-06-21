export class Producto {

    nombre: string;
    precio: number;
    categoria: string;
    envase: string;

    constructor( nombre: string, precio: number, categoria: string = '', envase: string = '') {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.envase = envase;
    }
}