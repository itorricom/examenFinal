//configurar service worker
let swLocation = "sw.js";

if (navigator.serviceWorker){
    if(window.location.href.includes("localhost")) swLocation = "/sw.js"; //varia segun host
    navigator.serviceWorker.register(swLocation);
}
//logica de la aplicación web 

console.log("Hola service worker");