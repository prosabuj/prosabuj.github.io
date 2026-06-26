// Self-destroying service worker.
// Replaces the old gatsby-plugin-offline worker for returning visitors:
// it unregisters itself and reloads open tabs so they get the real
// pre-rendered HTML instead of the cached app shell.
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", async () => {
  await self.registration.unregister()
  const clients = await self.clients.matchAll({ type: "window" })
  clients.forEach((client) => client.navigate(client.url))
})
