const cacheName = 'snake-game-cache-v1';
const cacheFiles = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'https://banner2.cleanpng.com/20180719/zv/kisspng-two-dots-computer-icons-flickr-social-media-network-5b50acdf15d294.5769589015320137910894.jpg',
    'https://i.pinimg.com/originals/ea/7b/12/ea7b12995b3891440f2af71a9d76a81c.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(cacheFiles))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
