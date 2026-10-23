



const usuarios =[

{
    nombre:"Kevyn Torres",
    telefono: "3142570994",
    correo:"kkevingutierrezz99gmail.com",
    contrasenas:"123456",
    id: "1052838240" 

},


{
    nombre:"Angela Torres",
    telefono: "3213426301",
    correo:"anegelito@gmail.com",
    contrasenas:"123",
    id: "464520964"
}

];

export function guardarUsuario(){

}

export function buscarUsuario(correo , contrasenas){

   let auth = usuarios.find((usuario)=>correo == usuario.correo && contrasenas == usuario.contrasenas)
   return auth 
  
}