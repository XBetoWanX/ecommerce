import { clientServices } from "../service/client-service.js";

const agregarProducto = document.querySelector(".agregar__container");
agregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
 
    const URL = document.querySelector(".agregar__url").value;


    const categoria = document.querySelector(".agregar__categorias").value;

    const nombreProducto = document.querySelector(".agregar__nombre").value;
    
    var precioProducto = document.querySelector(".agregar__precio").value;
    
    const descripcionProducto = document.querySelector(".agregar__descripcion").value;

    if (categoria == "star wars") {
        clientServices.agregarNuevoProducto(categoria, nombreProducto, precioProducto, URL, descripcionProducto).then(respuesta =>{
            console.log(respuesta);
        }).catch(err => console.log(err));
    }
    if (categoria == "consolas") {
        clientServices.agregarNuevoProducto(categoria, nombreProducto, precioProducto, URL, descripcionProducto).then(respuesta =>{
            console.log(respuesta);
        }).catch(err => console.log(err));
       
    }
    if (categoria == "diversos") {
        clientServices.agregarNuevoProducto(categoria, nombreProducto, precioProducto, URL, descripcionProducto).then(respuesta =>{
            console.log(respuesta);
        }).catch(err => console.log(err));
       
    }
});


