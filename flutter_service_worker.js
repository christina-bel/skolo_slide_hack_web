'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cdeb5d5dfadca8e35d77f5843cc429fa",
"index.html": "c4cbc7145027bac12da46a80fc52aff6",
"/": "c4cbc7145027bac12da46a80fc52aff6",
"styles.css": "d7e08fcbd623fd40be6a4fd7b661d0e8",
"main.dart.js": "cf25e214589897a94100c48cca50274a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/dash.png": "a4c0a401c37b76761cd31219fe9e269c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78f8d9c4ff6cbd23fe66d85080a8873c",
"assets/AssetManifest.json": "ecdc9cfa422139c1785ce1991e671a18",
"assets/NOTICES": "790dc56b05f7e8bb404d37c9267e110c",
"assets/FontManifest.json": "8e09abdf46ff7240256692116e5e9d02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/AmaticSC-Regular.ttf": "04b6b0803b089211561d2fd5e5d9af80",
"assets/fonts/AmaticSC-Bold.ttf": "fc2cf6f52e5e93d47948562ac011725b",
"assets/fonts/LuckiestGuy-Regular.ttf": "c6004be49628b1226eb31b068348d24f",
"assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/selected.svg": "27f8c463029ad3ad96525ba6aac3e85c",
"assets/assets/images/avatar_chris.png": "88bf46502976d163d0d73adee93550d1",
"assets/assets/images/dash.png": "a4c0a401c37b76761cd31219fe9e269c",
"assets/assets/images/restart.svg": "6487177d1639c14e8d6b80930f490cda",
"assets/assets/images/dash_eyes.png": "b421e453ccfce90519ad8a7268645108",
"assets/assets/images/skolo.svg": "c19d9fb413899201775f3f49f6914a03",
"assets/assets/images/puzzle-new.svg": "880c9bd4587d0dea4c461e77d6692f5a",
"assets/assets/images/github.svg": "34119f98c3ce7550d146fc81aee9bf49",
"assets/assets/images/avatar_dasha.png": "73b57e1d55a41e3fe04a7a138fefd516",
"assets/assets/images/avatar_maxim.png": "39cf38b9ca89ae5cde6bf6d4f7cd2824",
"assets/assets/images/default/dog.png": "bcbbfd375a98d5c95c7bcdb1e46b3eb0",
"assets/assets/images/default/city.png": "ced24c53299cbe4c6193ecec3543b0dd",
"assets/assets/images/default/cat.png": "a9ce4b1202b7c91d1cd1e4570821acd6",
"assets/assets/images/dash_without_eyes.png": "8e7ad79d3ce28146338d4b8a7d12504e",
"assets/assets/images/avatar_artem.png": "c99f8e5cac71b2b909bec9032ca1c7da",
"assets/assets/images/exit.svg": "d72785bcbb5f8aedde11f640a4073c0a",
"assets/assets/images/puzzle-new-filled.svg": "9fc3583ad556b8b36830d2e74c6ccbea",
"assets/assets/images/puzzle-continue.svg": "61c94396cdbb72101c190b3070181dd7",
"assets/assets/images/skolo_small_icon.png": "cce9397594fea3a773c655457b8d5f79",
"assets/assets/audio/glass.mp3": "7f2990510adc3509d5658dc8706fb7c8",
"assets/assets/audio/backward.mp3": "badc00919f93e551e8c2c56f343ee1b3",
"assets/assets/audio/choice.mp3": "834436363dbdd5a858e95b86eda373fd",
"assets/assets/audio/shuffle.mp3": "b9366b94fd7446109a1c2070bda698a8",
"assets/assets/audio/forward.mp3": "7350eaea810dd4ea11f4486637990e8b",
"assets/assets/audio/win.mp3": "c6e9dea605c986445944b7f8b8ea5e92",
"assets/assets/audio/move.mp3": "c26e733ca0a4d625ac535aa1ffa9781a",
"assets/assets/audio/4x4.mp3": "e5d529476e9847fcc9ecd42d439a62bf",
"assets/assets/audio/3x3.mp3": "feab42abc6f0884be460bb7f6136097c",
"assets/assets/audio/5x5.mp3": "d2e6abab89dbd1e214fc091a2d083956",
"assets/assets/audio/main.mp3": "34deddb0c1ed209d68eab2679e80ab9f",
"assets/assets/translations/ru.json": "c5d3538c4dc7010e3c5d628ef8f263c9",
"assets/assets/translations/en.json": "ffac96bd8acd2920309b7268a52ebbcc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
