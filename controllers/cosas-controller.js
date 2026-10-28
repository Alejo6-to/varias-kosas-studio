import {getlocalStore , removelocalStore} from "../helpers/local-storage.js";
import { generalAlerta } from "../helpers/alerts.js";
import { kosas,guardarkosa  } from "../models/cosasModel.js";

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


document.querySelector("#btn-agregar-kosa").addEventListener("click", () => {
let nombre_producto = document.querySelector("#nombre-producto").value
let precio = document.querySelector("#precio").value
let categoria = document.querySelector("#categoria").value
let materiales  = document.querySelector("#materiales").value
let dimensiones  = document.querySelector("#dimensiones").value
let stock  = document.querySelector("#stock").value
let descripcion  = document.querySelector("#descripcion").value
let foto_producto  = document.querySelector("#foto-producto").value

let kosa = {nombre_producto, precio, categoria, materiales, dimensiones, descripcion, foto_producto}

kosas.push(kosa)
guardarkosa("kosas",kosas)
generalAlerta("Registr exitoso", "Se guardo la kosa en la base de datos", "success")
})


