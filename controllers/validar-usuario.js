let usuarios =[
{
    correo : "admin@admin.com",
    contrasena : "123",
},
{
    correo : "josesillo@admin.com",
    contrasena : "1234"
}

]
// const usuariosArray = Object.values(usuarios);
sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
const formulario = document.querySelector(".login__container");
const correo = document.querySelector(".login__correo");
const contrasena = document.querySelector(".login__contraseña");
const boton = document.querySelector(".login__boton");

const error = document.querySelector(".login__ocultar")
// console.log(usuariosArray);

//Función para validar el usario y contraseña
formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    for(let i = 0; i < usuarios.length; i++){
        if(correo.value == usuarios[i].correo && contrasena.value == usuarios[i].contrasena){
            window.location.href = "./administrar-productos.html";
            break;
        }else{
            error.classList.remove("ocultar");
        }
    }
});
