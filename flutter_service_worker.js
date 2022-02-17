'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cdeb5d5dfadca8e35d77f5843cc429fa",
"index.html": "b9f766eb3c618fe6c9b5b2957173f728",
"/": "b9f766eb3c618fe6c9b5b2957173f728",
"styles.css": "d7e08fcbd623fd40be6a4fd7b661d0e8",
"main.dart.js": "1dff5b11e46161e5f85c69450970d10a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/dash.png": "a4c0a401c37b76761cd31219fe9e269c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "78f8d9c4ff6cbd23fe66d85080a8873c",
"assets/AssetManifest.json": "dfeca0e3b8255075f9314a957c09ae1c",
"assets/NOTICES": "1a4cf609c41fb7c21a9907de024dc2df",
"assets/FontManifest.json": "24a9d7e60ab4b0e6af52f4ca7ab73aa9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/LuckiestGuy-Regular.ttf": "c6004be49628b1226eb31b068348d24f",
"assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/selected.svg": "27f8c463029ad3ad96525ba6aac3e85c",
"assets/assets/images/dash.png": "a4c0a401c37b76761cd31219fe9e269c",
"assets/assets/images/restart.svg": "6487177d1639c14e8d6b80930f490cda",
"assets/assets/images/dash_eyes.png": "b421e453ccfce90519ad8a7268645108",
"assets/assets/images/skolo.svg": "c19d9fb413899201775f3f49f6914a03",
"assets/assets/images/puzzle-new.svg": "880c9bd4587d0dea4c461e77d6692f5a",
"assets/assets/images/github.svg": "34119f98c3ce7550d146fc81aee9bf49",
"assets/assets/images/default/dog.png": "bcbbfd375a98d5c95c7bcdb1e46b3eb0",
"assets/assets/images/default/city.png": "ced24c53299cbe4c6193ecec3543b0dd",
"assets/assets/images/default/cat.png": "a9ce4b1202b7c91d1cd1e4570821acd6",
"assets/assets/images/dash_without_eyes.png": "8e7ad79d3ce28146338d4b8a7d12504e",
"assets/assets/images/exit.svg": "d72785bcbb5f8aedde11f640a4073c0a",
"assets/assets/images/puzzle-new-filled.svg": "9fc3583ad556b8b36830d2e74c6ccbea",
"assets/assets/images/puzzle-continue.svg": "61c94396cdbb72101c190b3070181dd7",
"assets/assets/images/skolo_small_icon.png": "cce9397594fea3a773c655457b8d5f79",
"assets/assets/audio/backward.mp3": "c429cb30e9cd57998176151663542523",
"assets/assets/audio/shuffle.mp3": "b9366b94fd7446109a1c2070bda698a8",
"assets/assets/audio/forward.mp3": "17f564141e1e689d948990b7a683c50d",
"assets/assets/audio/win.mp3": "c6e9dea605c986445944b7f8b8ea5e92",
"assets/assets/audio/move.mp3": "93cba4059a335e445c84c23ae686f731",
"assets/assets/audio/main.mp3": "34deddb0c1ed209d68eab2679e80ab9f",
"assets/assets/translations/en.json": "22e67cc3ae278cb47bca0058382d3330",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
