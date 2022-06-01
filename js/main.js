//configurar service worker
let swLocation = "sw.js";

if (navigator.serviceWorker){
    if(window.location.href.includes("localhost")) swLocation = "/sw.js"; //varia segun host
    navigator.serviceWorker.register(swLocation);
    console.log("Hola service worker 2022");
}
//logica de la aplicación web 

//console.log("Hola service worker");