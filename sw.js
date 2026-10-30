// Kill switch for the gatsby-plugin-offline worker that returning visitors may
// still have: it unregisters itself and reloads open tabs onto the
// pre-rendered HTML. It must stay at /sw.js for those browsers to fetch it.
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: "window" })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
