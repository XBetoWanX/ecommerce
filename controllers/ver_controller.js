 import { clientServices } from "../service/client-service.js";

const mostarProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const image = document.querySelector(".ver-producto__img");
    const nombre = document.querySelector(".ver-producto__descripcion");
    const precio = document.querySelector(".ver-producto__precio");
    const descripcion = document.querySelector(".ver-producto__informacion");
    
    if (id === null){
        alert("Ocurrió un error");
    }


    clientServices.detalleProducto(id).then(( producto) => {
        image.setAttribute("src", producto.image);
        nombre.innerHTML = producto.nombre;
        precio.innerHTML = "$"+producto.precio;
        descripcion.innerHTML = producto.descripcion;
        
    });

}

mostarProducto();


