const agregarProducto = document.querySelector(".agregar__container");

agregarProducto.addEventListener("submit",(event) => {
    event.preventDefault();
    const URL = document.querySelector(".agregar__url");
    const valorURL = URL.value;

    const categoria = document.querySelector(".agregar__categorias");

    const nombreProducto = document.querySelector(".agregar__nombre")
    const valorNombre = nombreProducto.value;
    const precioProducto = document.querySelector(".agregar__precio");
    const valorPrecio = precioProducto.value;
    const descripcionProducto = document.querySelector(".agregar__descripcion");

    if(categoria.value == "star wars"){
        // crearProducto(valorURL, valorNombre, valorPrecio);
    }
    if(categoria.value == "consolas"){
        // crearProducto2(valorURL, valorNombre, valorPrecio);
    }
    if(categoria.value == "diversos"){
        // crearProducto3(valorURL, valorNombre, valorPrecio);
    }
    const agregarProductoStorage = {
        valorURL,
        valorNombre,
        valorPrecio
    }
    sessionStorage.setItem("producto", JSON.stringify(agregarProductoStorage));
    console.log(categoria.value);

});