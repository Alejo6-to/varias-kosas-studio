import{buscarUsuario}from "../models/usuarioModel.js"
import { generalAlerta } from "../helpers/alerts.js"
import { setlocalStorage } from "../helpers/local-storage.js"
import { generarToken } from "../helpers/generators.js"

function iniciar_Sesion(){
    let correo = document.querySelector("#correo").value

    let contrasenas = document.querySelector("#clave").value

    let auth = buscarUsuario(correo , contrasenas)
   
    if(auth){
        let token = generarToken()
        setlocalStorage("usuario", auth)
        setlocalStorage("token", token)
        
        
        generalAlerta ("Bienvenido al sistema ✅","sera redireccioanado al catalogo de cosas ")
        setTimeout(()=>{
        return window.location.href="/views/pages/cosas-view-catalogo.html"
    },3000)
    return

    }
    generalAlerta("Error ","Usuario y/O contraseñlas incorrectas")
    setTimeout(()=>{
    return window.location.href = "/index.html"
    },3000)

}

document.querySelector("#btn-login").addEventListener("click",iniciar_Sesion)