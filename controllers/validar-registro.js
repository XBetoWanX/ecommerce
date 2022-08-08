

const UsuariosViejos = JSON.parse(localStorage.getItem("usuarios"));

const correo = document.querySelector(".login__correo");
const contrasena = document.querySelector(".login__contraseña");
const confirmarContrasena = document.querySelector(".login__confirmar");



const contrasenaError = document.querySelector(".login__ocultar");
const correoError = document.querySelector(".ocultar__span");
const confirmarError = document.querySelector(".ocultar__confirmar");
const correoRepetido = document.querySelector(".ocultar__correo-repetido");

let regEx = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
const form = document.querySelector(".login__container");

correo.addEventListener("keyup", () =>{
    if(regEx.test(correo.value) == true){
        for(let i = 0; i < UsuariosViejos.length; i++){
            if(correo.value == UsuariosViejos[i].correo){
                correoRepetido.classList.remove("ocultar");
            }
        }
        correoError.classList.add("ocultar");
    }else{
        correoError.classList.remove("ocultar")
    }
});

contrasena.addEventListener("keyup", () =>{
    if(contrasena.value.length < 8){
        contrasenaError.classList.remove("ocultar");
    }else{
        contrasenaError.classList.add("ocultar");
    }
});

confirmarContrasena.addEventListener("keyup", () =>{
    if(contrasena.value != confirmarContrasena.value){
        confirmarError.classList.remove("ocultar");
    }else{
        confirmarError.classList.add("ocultar");
    }
});

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let correoDuplicado = false;
    for(let i = 0; i < UsuariosViejos.length; i++){
        if(correo.value == UsuariosViejos[i].correo){
            correoDuplicado = true;
        }
    }
    if(regEx.test(correo.value) == true && contrasena.value.length >= 8 && contrasena.value == confirmarContrasena.value && correoDuplicado == false){
        const usuariosObj = {
            correo : correo.value, 
            contrasena : contrasena.value
        } 

        UsuariosViejos.push(usuariosObj);
        localStorage.setItem("usuarios", JSON.stringify(UsuariosViejos));
        window.location.href = "./login.html"
    }
});

