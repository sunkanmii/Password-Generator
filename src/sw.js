//service workers act as a proxy between your web app and the network. 
/**
 * Steps:
 * 1.) Check whether browser supports service worker.
 * 2.) Call the load event handler on the window object and register it.
 */

const files = [
    '/',
    'pgen-css.css',
    'index.html',
    'js/main.js'
]

const staticCacheName = 'pages-cache-v1';

self.addEventListener("install", event => {
    console.log("Service worker installing...");
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(files);
        })
    );
});

self.addEventListener("activate", event => {
    console.log("Service worker is activating...");
})

self.addEventListener("fetch", event => {
    console.log("Fetching: ", event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if(response) {
                console.log("Found ", event.request.url, " in cache.");
                return response;
            }

            console.log("Network request for ", event.request.url);
            
            return fetch(event.request)
            // .then(response => {
            //     return caches.open(staticCacheName).then(cache => {
            //         cache.put(event.request.url, response.clone());
            //         return response;
            //     });
        //     })
        })
    )
})