import { clientServices } from "../service/client-service.js";



const inputBuscar = document.querySelector(".encabezado__barra-de-busqueda");


clientServices.buscarProducto().then((data) => {
    data.forEach(producto => {
        const contenedorDesplegar = document.querySelector("[data-list]");
        contenedorDesplegar.classList.add(".encabezado__articulos");
        const productoNombre = producto.nombre;
        const lista = document.createElement("ul");
        const items = document.createElement("li");
        items.classList.add("encabezado__item")
        const link = document.createElement("a");
        link.setAttribute(`href`, `./ver-producto.html?id=${producto.id}`)
        link.classList.add(".encabezado__link")
        items.classList.add("ocultar");
        link.innerHTML = productoNombre;
        items.appendChild(link);
        lista.appendChild(items);
        contenedorDesplegar.appendChild(lista);
      

        inputBuscar.addEventListener("keyup", (event) =>{
            const searchText = event.target.value;
            const eRegular = new RegExp(searchText, "i");
            if(productoNombre.match(eRegular) != null){
                items.classList.remove("ocultar");
            }else{
                items.classList.add("ocultar");
            }
            if(searchText == ""){
                items.classList.add("ocultar");
            }
        })
    
    });
}).catch((error) => alert("Ocurrió un error"));

