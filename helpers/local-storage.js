
export function getlocalStore (key){

    return JSON.parse(localStorage.getItem(key))


}
export function setlocalStorage(key, value){

    localStorage.setItem(key, JSON.stringify(value))

}
export function removelocalStore(key){
    localStorage.removeItem(key)

}