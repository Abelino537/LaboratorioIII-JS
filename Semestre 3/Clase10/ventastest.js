/*
Laboratorio III
Clase 10
12/06/23
Abel Pierna
Clase producto, orden y ventasTest
*/


class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    producto() {
        return `
        ${'Producto ' + this.idProducto}
        ${'Nombre: ' + this.nombre} 
        ${'Precio: $' + this.precio + '\n'} `;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return this.producto();
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor(productos) {
        if (Orden.contadorOrdenes < Orden.MAX_PRODUCTOS) {
            this.idOrden = ++Orden.contadorOrdenes;
            this.productos = productos.slice(0, Orden.MAX_PRODUCTOS);
        } else {
            console.log('No se pueden agregar más productos. Solo se permiten hasta 5 productos por orden.');
        }
    }

    orden() {
        return this.productos.toString();
    }

    agregarProductos(producto) {
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
        } else {
            console.log('No se pueden agregar más productos. Solo se permiten hasta 5 productos por orden.');
        }
    }

    calcularTotal() {
        let totalPrecio = 0;
        for (let producto of this.productos) {
            totalPrecio += producto.precio;
        }
        return 'Precio total de la orden: $' + totalPrecio;
    }

    mostrarOrden() {
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            return 'Orden: ' + this.idOrden + this.orden() + '\n' + this.calcularTotal();
        } else {
            return 'Orden: ' + this.idOrden + this.orden() + '\n' + this.calcularTotal() + '\nNo se pueden agregar más productos. Solo se permiten hasta 5 productos por orden.' ;
        }
        
    }
}

let producto1 = new Producto('Pantalon', 5000);
console.log(producto1.toString());
let producto2 = new Producto('Remera', 3000);
console.log(producto2.toString());
let producto3 = new Producto('Zapatillas', 3000);
console.log(producto3.toString());
let producto4 = new Producto('Buzo', 8000);
console.log(producto4.toString());
let producto5 = new Producto('Boxer', 1000);
console.log(producto5.toString());
let producto6 = new Producto('Medias', 500);
console.log(producto6.toString());

let orden1 = new Orden([producto1, producto2, producto3, producto4, producto5]);
console.log(orden1.mostrarOrden());

let orden2 = new Orden([producto1, producto2, producto3, producto4, producto5, producto6]);
console.log(orden2.mostrarOrden());
