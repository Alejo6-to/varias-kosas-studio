import{buscarUsuario}from "../models/usuarioModel.js"
import { generalAlerta } from "../helpers/alerts.js"



function iniciar_Sesion(){
    let correo = document.querySelector("#correo").value

    let contrasenas = document.querySelector("#clave").value

    let auth = buscarUsuario(correo , contrasenas)
   
    if(auth){
        generalAlerta ("Bienvenido al sistema","sera redireccioanado al catalogo de cosas ")
        setTimeout(()=>{
        return window.location.href="/views/pages/cosas-view-catalogo.html"
    },3000)

    }
    generalAlerta("Error ","Usuario y/O contraseñlas incorrectas")
    setTimeout(()=>{
    return window.location.href = "/index.html"
    },3000)

}

document.querySelector("#btn-login").addEventListener("click",iniciar_Sesion)