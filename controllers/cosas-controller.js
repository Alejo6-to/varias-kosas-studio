import {getlocalStore , removelocalStore } from "../helpers/local-storage.js";
import { generalAlerta } from "../helpers/alerts.js";

let usuario = getlocalStore("usuario")

let token = getlocalStore("token")
if(!token){
    window.location.href="/index.hthml"
}

document.querySelector("#info-usuario").textContent = "usuario:" + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click",function(){
    removelocalStore("usuario")
    window.location.href  = "/index.html"
})