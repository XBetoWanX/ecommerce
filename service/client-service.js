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

const eliminarProducto = (id) =>{
    console.log("Eliminar a: ", id);
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE"
    });
};

// const editarProducto = () =>{
//     return fetch(`http://localhost:3000/productos/${id}`,{
//         method : ""
// }

export const clientServices = {
    listaProductos,
    agregarNuevoProducto,
    eliminarProducto
};


    



