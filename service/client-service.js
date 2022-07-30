const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const agregarNuevoProducto = (seccion, nombre, precio, image, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ seccion, nombre, precio, image, descripcion, id: uuid.v4() })
    })
}

const eliminarProducto = (id) => {
    console.log("Eliminar a: ", id);
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
}

const editarProducto = (seccion, nombre, precio, image, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ seccion, nombre, precio, image, descripcion})
    }).then( respuesta => console.log(respuesta)).catch((err) => console.log(err));
};

export const clientServices = {
    listaProductos,
    agregarNuevoProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto   
};






