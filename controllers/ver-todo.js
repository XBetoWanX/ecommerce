import { clientServices } from "../service/client-service.js";


const starWars = (imagen, nombre, precio, id) => {
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
    const verProducto = document.createElement("a");
    verProducto.classList.add("productos__link");
    verProducto.innerHTML = "Ver producto";
    verProducto.setAttribute(`href`, `./ver-producto.html?id=${id}`);

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorProducto.append(verProducto);
    contenedorPadre.appendChild(contenedorProducto);

}

const consolas = (imagen, nombre, precio, id) => {
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
    const verProducto = document.createElement("a");
    verProducto.classList.add("productos__link");
    verProducto.innerHTML = "Ver producto";
    verProducto.setAttribute(`href`, `./ver-producto.html?id=${id}`);

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorProducto.append(verProducto);
    contenedorPadre.appendChild(contenedorProducto);
}

const diversos = (imagen, nombre, precio, id) => {
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
    const verProducto = document.createElement("a");
    verProducto.classList.add("productos__link");
    verProducto.innerHTML = "Ver producto";
    verProducto.setAttribute(`href`, `./ver-producto.html?id=${id}`);

    contenedorProducto.appendChild(img);
    contenedorProducto.appendChild(parrafoNombre);
    contenedorProducto.appendChild(parrafoPrecio);
    contenedorProducto.append(verProducto);
    contenedorPadre.appendChild(contenedorProducto);

}

clientServices.listaProductos().then((data) => {
    data.forEach(productos => {
        const {seccion, image, nombre, precio, id} = productos
        if(seccion == "star wars"){
            var precioConcatenar = "$" + precio
            starWars(image, nombre, precioConcatenar, id);
        }
        if(seccion == "consolas"){
            var precioConcatenar = "$" + precio
            consolas(image, nombre, precioConcatenar, id);
        }
        if (seccion == "diversos"){
            var precioConcatenar = "$" + precio
            diversos(image, nombre, precioConcatenar, id);
        }
    });
}).catch((error) => console.log("Ocurrió un error"));