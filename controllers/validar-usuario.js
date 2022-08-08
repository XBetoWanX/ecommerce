let usuarios =[
{
    correo : "admin@alura.com",
    contrasena : "123"
},
]

if(localStorage.length == 0){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

const usuariosArray = JSON.parse(localStorage.getItem("usuarios"));

const formulario = document.querySelector(".login__container");
const correo = document.querySelector(".login__correo");
const contrasena = document.querySelector(".login__contraseña");
const boton = document.querySelector(".login__boton");

const error = document.querySelector(".login__ocultar")
// console.log(usuariosArray);

//Función para validar el usario y contraseña
formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    for(let i = 0; i < usuariosArray.length; i++){
        if(correo.value == usuariosArray[i].correo && contrasena.value == usuariosArray[i].contrasena){
            window.location.href = "./administrar-productos.html";
            break;
        }else{
            error.classList.remove("ocultar");
            console.log(usuariosArray.length)
        }
    }
});
