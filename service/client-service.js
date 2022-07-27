const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const agregarNuevoProducto = (seccion, nombre, precio, image, descripcion) =>{
    return fetch("http://localhost:3000/productos",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({seccion, nombre, precio, image, descripcion, id: uuid.v4()})
    })
}

export const clientServices = {
    listaProductos,
    agregarNuevoProducto
};


    



