import { clientServices } from "../service/client-service.js";
const starWars = (imagen, nombre, precio) => {
    const contenedorPadre = document.querySelector(".productos__hardware")
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("productos__container")
    

    const img = document.createElement("img");
    img.classList.add("productos__img")
    img.setAttribute("src", imagen);
    const parrafoNombre = document.createElement("p");
    parrafoNombre.classList.add("productos__descripcion");
    parrafoNombre.innerHTML = nombre;
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.classList.add("productos__precio");
    parrafoPrecio.innerHTML = precio;

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorPadre.appendChild(contenedorProducto);

}

const consolas = (imagen, nombre, precio) => {
    const contenedorPadre = document.querySelector(".productos__consolas")
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("productos__container")
    

    const img = document.createElement("img");
    img.classList.add("productos__img")
    img.setAttribute("src", imagen);
    const parrafoNombre = document.createElement("p");
    parrafoNombre.classList.add("productos__descripcion");
    parrafoNombre.innerHTML = nombre;
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.classList.add("productos__precio");
    parrafoPrecio.innerHTML = precio;

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorPadre.appendChild(contenedorProducto);

}

const diversos = (imagen, nombre, precio) => {
    const contenedorPadre = document.querySelector(".productos__pcs-armadas")
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("productos__container")
    

    const img = document.createElement("img");
    img.classList.add("productos__img")
    img.setAttribute("src", imagen);
    const parrafoNombre = document.createElement("p");
    parrafoNombre.classList.add("productos__descripcion");
    parrafoNombre.innerHTML = nombre;
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.classList.add("productos__precio");
    parrafoPrecio.innerHTML = precio;

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorPadre.appendChild(contenedorProducto);

}

clientServices.listaProductos().then((data) => {
    data.forEach(productos => {
        const {image, nombre, precio} = productos
        if(productos.seccion == "star wars"){
            var precioConcatenar = "$" + precio
            starWars(image, nombre, precioConcatenar);
        }
        if(productos.seccion == "consolas"){
            var precioConcatenar = "$" + precio
            consolas(image, nombre, precioConcatenar);
        }
        if (productos.seccion == "diversos"){
            var precioConcatenar = "$" + precio
            diversos(image, nombre, precioConcatenar);
        }
    });
}).catch((error) => alert("Ocurrió un error"));