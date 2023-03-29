/// <reference lib="webworker" />

import { build, files, version } from "$service-worker";

const worker = self as unknown as ServiceWorkerGlobalScope;
const FILES = `cache${version}`;

const toCache = build.concat(files);
const staticAssets = new Set(toCache);

worker.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(FILES);
      await cache.addAll(toCache);
    })()
  );
});

worker.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (keys) => {
      for (const key of keys) {
        if (key !== FILES) await caches.delete(key);
      }

      worker.clients.claim();
    })
  );
});

async function fetchAndCache(request: Request) {
  const cache = await caches.open(`offline${version}`);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response) return response;

    throw err;
  }
}

worker.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range")) return;

  const url = new URL(e.request.url);

  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest =
    url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset =
    url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached =
    e.request.cache === "only-if-cached" && !isStaticAsset;

  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    e.respondWith(
      (async () => {
        const cachedAsset = isStaticAsset && (await caches.match(e.request));

        return cachedAsset || fetchAndCache(e.request);
      })()
    );
  }
});
