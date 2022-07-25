//Función para crear cada uno de los productos
const crearProducto = (imagen, descripcion, precio) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    item.appendChild(createDelete());
    item.appendChild(createEdit());
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
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

const crearProducto2 = (imagen, descripcion, precio) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos--2");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    item.appendChild(createDelete());
    item.appendChild(createEdit());
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
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

const crearProducto3 = (imagen, descripcion, precio) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos--3");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    item.appendChild(createDelete());
    item.appendChild(createEdit());
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
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

const deleteProduct = (event) => {
    const elemento = event.target;
    elemento.parentNode.remove();
}

const editProduct = (event) => {
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
    padre.appendChild(contenedorInputs);

    contenedorBtns.appendChild(botonAceptar);
    contenedorBtns.appendChild(botonCancelar);
    padre.appendChild(contenedorBtns);

    campoDescripcion.value = padre.childNodes[3].innerHTML;
    campoPrecio.value = padre.childNodes[4].innerHTML;

    botonAceptar.addEventListener("click", (event) => {
        event.preventDefault()
        const editarImagen = campoImagen.value;
        const editarDescripcion = campoDescripcion.value;
        const editarPrecio = campoPrecio.value;
        if(campoImagen.value != ""){
            padre.childNodes[2].setAttribute("src", editarImagen);
            padre.childNodes[2].setAttribute("width", "176px")
        }
        if(campoDescripcion.value != ""){
            padre.childNodes[3].innerHTML = editarDescripcion;
        }
        if(campoPrecio.value != ""){
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

const createDelete = () => {
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash-can");
    i.addEventListener("click", deleteProduct);
    return i;
}

const createEdit = () => {
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-pen-to-square");
    i.addEventListener("click", editProduct);
    return i;
}

crearProducto("imagenes/stars1.png", "Producto XYZ", "$50");
crearProducto("imagenes/stars2.png", "Producto XYZ", "$50");
crearProducto("imagenes/stars3.png", "Producto XYZ", "$50");
crearProducto("imagenes/stars4.png", "Producto XYZ", "$50");




crearProducto2("imagenes/consolas1.png", "Producto XYZ", "$50");
crearProducto2("imagenes/consolas2.png", "Producto XYZ", "$50");
crearProducto2("imagenes/consolas3.png", "Producto XYZ", "$50");
crearProducto2("imagenes/consolas4.png", "Producto XYZ", "$50");

crearProducto3("imagenes/diversos1.png", "Producto XYZ", "$50");
crearProducto3("imagenes/diversos2.png", "Producto XYZ", "$50");
crearProducto3("imagenes/diversos3.png", "Producto XYZ", "$50");
crearProducto3("imagenes/diversos4.png", "Producto XYZ", "$50");
