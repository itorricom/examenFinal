const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "index.html",
    "css/style.css",
    "js/main.js",
];

self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.wait.Until(cacheStatic);
}); 

self.addEventListener("fetch", e => {
    console.log("fectch! ", e.request);
})