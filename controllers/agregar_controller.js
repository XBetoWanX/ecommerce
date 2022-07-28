import { clientServices } from "../service/client-service.js";
//Función para crear cada uno de los productos
const crearProducto = (imagen, descripcion, precio, id) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    const iDelete = document.createElement("i");
    iDelete.classList.add("fa-solid", "fa-trash-can");
    iDelete.setAttribute("id", id);
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("i");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.addEventListener("click", (event) =>{
        editProduct(event);
    })
    item.appendChild(iEdit);
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
    img.setAttribute("width", "176px");
    item.appendChild(img);
    const parrafo = document.createElement("p");
    parrafo.classList.add("administrar-productos__descripcion");
    parrafo.innerText = descripcion;
    item.appendChild(parrafo);
    const costo = document.createElement("p");
    costo.classList.add("administrar-productos__precio");
    costo.innerHTML = precio;
    item.appendChild(costo);

    contenedorProducto.appendChild(item);
 
    
}

const crearProducto2 = (imagen, descripcion, precio, id) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos--2");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    const iDelete = document.createElement("i");
    iDelete.classList.add("fa-solid", "fa-trash-can");
    iDelete.setAttribute("id", id);
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("i");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.addEventListener("click", (event) =>{
        editProduct(event);
    })
    item.appendChild(iEdit);
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
    img.setAttribute("width", "176px");
    item.appendChild(img);
    const parrafo = document.createElement("p");
    parrafo.classList.add("administrar-productos__descripcion");
    parrafo.innerText = descripcion;
    item.appendChild(parrafo);
    const costo = document.createElement("p");
    costo.classList.add("administrar-productos__precio");
    costo.innerHTML = precio;
    item.appendChild(costo);

    contenedorProducto.appendChild(item);

    
    
}

const crearProducto3 = (imagen, descripcion, precio, id) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos--3");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    const iDelete = document.createElement("i");
    iDelete.classList.add("fa-solid", "fa-trash-can");
    iDelete.setAttribute("id", id);
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("i");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.addEventListener("click", (event) =>{
        editProduct(event);
    })
    item.appendChild(iEdit);
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
    img.setAttribute("width", "176px");
    item.appendChild(img);
    const parrafo = document.createElement("p");
    parrafo.classList.add("administrar-productos__descripcion");
    parrafo.innerText = descripcion;
    item.appendChild(parrafo);
    const costo = document.createElement("p");
    costo.classList.add("administrar-productos__precio");
    costo.innerHTML = precio;
    item.appendChild(costo);

    contenedorProducto.appendChild(item);
    
}

const deleteProduct = (id) => {
    clientServices.eliminarProducto(id).then( respuesta =>{
        console.log(respuesta)
    }).catch(err => alert("Ocurrió un error"));
    console.log(id);
    
}

const eliminarProducto = (event) =>{
    const producto = event.target;
    producto.parentNode.remove();
}





const editProduct = (event) => {
    const formularioEditar = document.createElement("section");
    formularioEditar.classList.add("administar-productos__section")
    const contenedorInputs = document.createElement("div");
    contenedorInputs.classList.add("administar-productos__form")

    const contenedorBtns = document.createElement("div");
    contenedorBtns.classList.add("administar-productos__botones");

    const botonAceptar = document.createElement("button");
    botonAceptar.classList.add("administrar-productos__boton");
    botonAceptar.innerHTML = "Aceptar";

    const botonCancelar = document.createElement("button");
    botonCancelar.classList.add("administrar-productos__boton--rojo");
    botonCancelar.innerHTML = "Cancelar";

    const campoImagen = document.createElement("input");
    campoImagen.setAttribute("placeholder", "Ingrese la URL");

    const campoDescripcion = document.createElement("input");
    campoDescripcion.setAttribute("placeholder", "Descripción");

    const campoPrecio = document.createElement("input");
    campoPrecio.setAttribute("placeholder", "Precio");

    const elemento = event.target;
    const padre = elemento.parentNode;

    contenedorInputs.appendChild(campoImagen);
    contenedorInputs.appendChild(campoDescripcion);
    contenedorInputs.appendChild(campoPrecio);
    formularioEditar.appendChild(contenedorInputs);
    padre.appendChild(formularioEditar);

    contenedorBtns.appendChild(botonAceptar);
    contenedorBtns.appendChild(botonCancelar);
    formularioEditar.appendChild(contenedorBtns);
    padre.appendChild(formularioEditar);

    campoDescripcion.value = padre.childNodes[3].innerHTML;
    campoPrecio.value = padre.childNodes[4].innerHTML;

    botonAceptar.addEventListener("click", (event) => {
        event.preventDefault()
        const editarImagen = campoImagen.value;
        const editarDescripcion = campoDescripcion.value;
        const editarPrecio = campoPrecio.value;
        if (campoImagen.value != "") {
            padre.childNodes[2].setAttribute("src", editarImagen);
            padre.childNodes[2].setAttribute("width", "176px")
        }
        if (campoDescripcion.value != "") {
            padre.childNodes[3].innerHTML = editarDescripcion;
        }
        if (campoPrecio.value != "") {
            padre.childNodes[4].innerHTML = editarPrecio;
        }
        contenedorInputs.style.display = "none";
        contenedorBtns.style.display = "none";

    });

    botonCancelar.addEventListener("click", () => {
        contenedorInputs.style.display = "none";
        contenedorBtns.style.display = "none";
    });
}

// const createDelete = () => {
//     const i = document.createElement("i");
//     i.classList.add("fa-solid", "fa-trash-can");
//     i.addEventListener("click", deleteProduct);
//     return i;
// }

// const createEdit = () => {
//     const i = document.createElement("i");
//     i.classList.add("fa-solid", "fa-pen-to-square");
//     i.addEventListener("click", editProduct);
//     return i;
// }



clientServices.listaProductos().then((data) => {
    data.forEach(productos => {
        const {image, nombre, precio, id} = productos
        if(productos.seccion == "star wars"){
            var precioConcatenar = "$" + precio
            crearProducto(image, nombre, precioConcatenar, id);
        }
        if(productos.seccion == "consolas"){
            var precioConcatenar = "$" + precio
            crearProducto2(image, nombre, precioConcatenar, id);
        }
        if (productos.seccion == "diversos"){
            var precioConcatenar = "$" + precio
            crearProducto3(image, nombre, precioConcatenar, id);
        }
    });
}).catch((error) => alert("Ocurrió un error"));
    

