import {productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintaProductos.js'


//llamando a la fila
let fila=document.getElementById("fila")


//Pintar los productos de la tienda
pintarProductos(productos)

//escuchando click en la fila de productos
fila.addEventListener("click",function(evento){
    //window.location.href="./src/views/ampliarinfo.html"
    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent

    //usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    
    window.location.href="../../src/views/ampliarinfo.html"
})
