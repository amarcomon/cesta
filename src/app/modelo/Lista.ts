export class Lista {
    
     nombre: string;
     producto: string;
     cantidad: number;

    constructor(nombre: string, producto:string, cantidad: number) {
        this.nombre = nombre;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getNombe() {
        return this.nombre;
    }
    
    getProducto() {
        return this.producto;
    }

    getCantidad() {
        return this.cantidad;
    }
}