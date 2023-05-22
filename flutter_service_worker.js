'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e72829da5e0e149c1d3bd2cac9a65c3b",
"assets/assets/button/aboutme.png": "38f0896296b9e9ff062407d7e74afe34",
"assets/assets/button/certificate.png": "b7a64f9faa6507cbe3405d473f78fa11",
"assets/assets/button/experience.png": "3d0c62cd0c9c974129e3e9910b154575",
"assets/assets/button/portofolio.png": "1fbeacd051d9a0a3cbeca76487beaabe",
"assets/assets/button/resume.png": "9b07ec1370a868e9481c6ab121a36dfe",
"assets/assets/button/skill.png": "b8c221b99853337c9a31ab2d4a23d827",
"assets/assets/foto/pp.png": "3f253ad430647fd12858155332a6aac0",
"assets/assets/icon/copyright.png": "6de988ccf10b34eb0866c5f9955b1b64",
"assets/assets/icon/GitHub.png": "404a5db8eec868e5f29b9d20b0395094",
"assets/assets/icon/Gmail.png": "08ff18c03e33759455e4eb634f0f287d",
"assets/assets/icon/LinkedIn.png": "f9ed832684a8759eb0cf91ebd5e1355e",
"assets/assets/icon/Telegram.png": "6beba09270547289d2f24b16d9cb8547",
"assets/assets/icon/Twitter.png": "90f6a0b62019ad8de07b1ef3a69052fd",
"assets/assets/icon/Website.png": "80087b01e746886e8957b45fd598637c",
"assets/assets/icon/WhatsApp.png": "625f77a3a425e11eeff573d088ea14c4",
"assets/assets/icon/YouTube.png": "26b082c7ae241791b9ad093e786f01e0",
"assets/assets/logo/bemfti.jpg": "5295e984f362c928593c36c7c3ec8786",
"assets/assets/logo/edspert.png": "e5d156a2fb4c56ef77a23b5a46885ded",
"assets/assets/logo/kampus_merdeka.png": "3d913299eb63acddae8424c021a8bbe4",
"assets/assets/logo/msib.png": "ea616e4ebbed29bf5ff8d3d6b082ae8f",
"assets/assets/lottie/bg.json": "722da02ea0b350ad74e25e97a4ad7eef",
"assets/assets/lottie/contact.json": "16851628b2796acbfd630a083f358d0e",
"assets/assets/lottie/error.json": "06eef567fc78fe6c77300b2c2ae606d5",
"assets/assets/lottie/swipe.json": "649bfc974b42cd4d7941409535c0f6e3",
"assets/assets/portofolio/avatar/delvy.png": "9994716676470d125ff0a0354efce26b",
"assets/assets/portofolio/avatar/roni.png": "20f53bf21c31908c5475c1efe9507e3c",
"assets/assets/portofolio/avatar/taufik.png": "75d4ef4ab52f0c041a26b12435bdb612",
"assets/assets/portofolio/avatar/yozi.png": "61529dc9f856473d50d151241838627b",
"assets/assets/portofolio/bayu/andro1.png": "9736b3b88f96b1ef8d67cc3e6044a714",
"assets/assets/portofolio/bayu/andro2.png": "b8ce091b112de74cfb45cb501368d4eb",
"assets/assets/portofolio/bayu/andro3.png": "25e06726ee486ec366c62a9b3b3c4398",
"assets/assets/portofolio/bayu/bayu.png": "53c4f63c6faa583c5d3f3147669946af",
"assets/assets/portofolio/bayu/frame_bayu.png": "8f2c99e1c01d997becd4d2dadbd31d3c",
"assets/assets/portofolio/bayu/web1.png": "b4d02be134bd4a6240206f6a465311d5",
"assets/assets/portofolio/bayu/web2.png": "9dc01de8170cf8ac96ba0f556cbe034b",
"assets/assets/portofolio/bayu/web3.png": "afeec5572d9609c2834087beace63a56",
"assets/assets/portofolio/crofflite/andro1.png": "085905627cdad3b8bfb614efdf722d00",
"assets/assets/portofolio/crofflite/andro2.png": "f4c6f5301c4d3047ea7f9908923d9e66",
"assets/assets/portofolio/crofflite/andro3.png": "f0735970c6ebf2a3c6bdf715cf8e1889",
"assets/assets/portofolio/crofflite/crofflite.png": "bd254dce4b969b7cd99de3dc76ca8ce8",
"assets/assets/portofolio/crofflite/frame_crofflite.png": "e789f82e482eaa3147bb03d5cb73354b",
"assets/assets/portofolio/gezunt/andro1.png": "46b6e5715e89fb9ef0ce60e7c4f0acf6",
"assets/assets/portofolio/gezunt/andro2.png": "06e2c084371a72047fe9f3851100a98b",
"assets/assets/portofolio/gezunt/andro3.png": "13020bdd56bdb0c85981210438150cc5",
"assets/assets/portofolio/gezunt/frame_gezunt.png": "513886fde57303fd8d03af7b867b71f9",
"assets/assets/portofolio/gezunt/gezunt.png": "366e77e3c1d04d319745cb187bb3fe69",
"assets/assets/portofolio/mecrypt/andro1.png": "32a9159aa4d90f7295cf5166799a33f3",
"assets/assets/portofolio/mecrypt/andro2.png": "b1afd477feddf61c4eab82eb2dde4824",
"assets/assets/portofolio/mecrypt/andro3.png": "1ac32e3c03253cf18dfa41008092e727",
"assets/assets/portofolio/mecrypt/frame_mecrypt.png": "7546a726d83a444e01ae771f3147e31b",
"assets/assets/portofolio/mecrypt/mecrypt.jpg": "d26d9a3744234fe5f8331517ded589fe",
"assets/assets/portofolio/mecrypt/web1.png": "7831a32aa864776c293ac96817a836cc",
"assets/assets/portofolio/mecrypt/web2.png": "a510141571b20c232c1c8488389969db",
"assets/assets/portofolio/mecrypt/web3.png": "14ce7c70ed9992193168aeeaf16764a8",
"assets/assets/portofolio/nirdesa/andro1.png": "bca4576445e803148b050d1c8640ac0b",
"assets/assets/portofolio/nirdesa/andro2.png": "ad05f6fad6b27aeafe169fad160606d3",
"assets/assets/portofolio/nirdesa/andro3.png": "bca4576445e803148b050d1c8640ac0b",
"assets/assets/portofolio/nirdesa/frame_nirdesa.png": "d69589439029202073faf4847ed6c2fe",
"assets/assets/portofolio/poendoeng/andro1.png": "4e10a2e3c1438504146c6dfa3ef2f059",
"assets/assets/portofolio/poendoeng/andro2.png": "ba49c1579213c7aca22555c47a6ac8ee",
"assets/assets/portofolio/poendoeng/andro3.png": "12dc7de6803d5092f5671e40386f62bd",
"assets/assets/portofolio/poendoeng/frame_poendoeng.png": "4c0f02bed1538378497ef4213350fb9d",
"assets/assets/portofolio/poendoeng/poendoeng.png": "a1f24e5df99f85d06b609b3faa5fd0c0",
"assets/assets/portofolio/thrilogic/andro1.png": "e38dde81439f74d993f0ab49ff55da26",
"assets/assets/portofolio/thrilogic/andro2.png": "8c0be98f7f840373a9c208d03cf53733",
"assets/assets/portofolio/thrilogic/andro3.png": "6e408697bd077e733944f3567f98fef5",
"assets/assets/portofolio/thrilogic/frame_thrilogic.png": "053b0e91b446ff5564b014efac3df329",
"assets/assets/portofolio/thrilogic/thrilogic.jpg": "a0ae8ce8d96b4852449604686777183a",
"assets/assets/portofolio/wikenyus/andro1.png": "02c6a06589b4575a61dc9c88b6698ffd",
"assets/assets/portofolio/wikenyus/andro2.png": "b38e203d26123a6bdbfa0d759158d0e0",
"assets/assets/portofolio/wikenyus/andro3.png": "16d9a29eee6bf444569515f40c29500b",
"assets/assets/portofolio/wikenyus/frame_wikenyus.png": "58d6b852e519ab33c9c8dbec14078e86",
"assets/assets/portofolio/wikenyus/wikenyus.png": "dbf7b9fff1ffa5d741e348f9c4ffacc2",
"assets/assets/sertif/competency.jpg": "bd41200f2cd7152f9306dc5a2e4ae8cc",
"assets/assets/sertif/halofti.jpg": "65cded8d01b8ac362b9635a8738d8bac",
"assets/assets/sertif/iot.jpg": "eba18266142d8f98c2767e3b0def1aea",
"assets/assets/sertif/msib.jpg": "abbabda44e8384daf460cb7964fa6d70",
"assets/assets/sertif/serathon.jpg": "8c9dfc8a1988198199a67a212aa136e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b7f7e0e5fdcd4b20ace3cd0cf4deeda7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f2ed1cc030fe4a578e02c9b75e29236c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "687770c4cd40c014de4c0f7f3b3e71f9",
"icons/Icon-512.png": "066923d84f111393a03530d2ab4cc935",
"icons/Icon-maskable-192.png": "687770c4cd40c014de4c0f7f3b3e71f9",
"icons/Icon-maskable-512.png": "066923d84f111393a03530d2ab4cc935",
"index.html": "450c2e4e9d35f8beeb7ded494914b2de",
"/": "450c2e4e9d35f8beeb7ded494914b2de",
"main.dart.js": "b811797f37afe4a6551ce5ec1d395a98",
"manifest.json": "ac123d960839d88feaff253fcaa3650b",
"version.json": "12a92ef79835b40a6093bcc932b54998"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
