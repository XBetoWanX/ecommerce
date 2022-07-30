import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector(".agregar__container");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const image = document.querySelector(".agregar__url");
    const nombre = document.querySelector(".agregar__nombre");
    const precio = document.querySelector(".agregar__precio");
    const categoria = document.querySelector(".agregar__categorias");
    const descripcion = document.querySelector(".agregar__descripcion");

    if (id === null){
        alert("Ocurrió un error");
    }

    
    clientServices.detalleProducto(id).then(( producto) => {
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        image.value = producto.image;
        descripcion.value = producto.descripcion;
        categoria.value = producto.seccion;
    });
}

obtenerInformacion();


formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const image = document.querySelector(".agregar__url").value;
    const nombre = document.querySelector(".agregar__nombre").value;
    const precio = document.querySelector(".agregar__precio").value;
    const categoria = document.querySelector(".agregar__categorias").value;
    const descripcion = document.querySelector(".agregar__descripcion").value;

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    clientServices.editarProducto(categoria, nombre, precio, image, descripcion, id).then(() =>{
        window.location.href = "administrar-productos.html";
    }).catch(err => console.log(err));
});