import {productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintaProductos.js'


//llamando a la fila
let fila=document.getElementById("fila")


//Pintar los productos de la tienda
pintarProductos(productos)