import { clientServices } from "../service/client-service.js";

//Función para crear cada uno de los productos
const crearProducto = (imagen, descripcion, precio, id) => {
    const contenedorProducto = document.querySelector(".administrar-productos__productos");
    const item = document.createElement("div");
    item.classList.add('administrar-productos__imagen--contenedor');
    const iDelete = document.createElement("i");
    iDelete.classList.add("fa-solid", "fa-trash-can");
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("a");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.setAttribute("href", `editar-producto.html?id=${id}`);
    iEdit.addEventListener("click", () =>{
        
    })
    item.appendChild(iEdit);
    const img = document.createElement("img");
    img.classList.add("administrar-productos__imagen");
    img.setAttribute("src", imagen);
    img.setAttribute("width", "176px");
    img.setAttribute("height", "174px");
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
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("a");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.setAttribute("href", `editar-producto.html?id=${id}`);
    iEdit.addEventListener("click", () =>{
        
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
    iDelete.addEventListener("click", (event)=>{
        deleteProduct(id);
        eliminarProducto(event);
    });
    item.appendChild(iDelete);
    const iEdit = document.createElement("a");
    iEdit.classList.add("fa-solid", "fa-pen-to-square");
    iEdit.setAttribute("href", `editar-producto.html?id=${id}`);
    iEdit.addEventListener("click", () =>{
       
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
    

