export function pintarProductos(productos){
    productos.forEach(function(producto){
        //creando columnas para alejar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //crear una tarjeta para almacenar la info del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        //crear un precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="USD "+producto.precio

        //detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })
    
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
    
    
    //definiendo datos
    let nombre="James Rodrigues"
    if(5>2){
        let nombre="Lucho Diaz"
    }
    console.log("hola "+nombre)
}