const CACHE_NAME = 'ndb-nuisibles-v1'
const STATIC_CACHE = 'ndb-static-v1'
const DYNAMIC_CACHE = 'ndb-dynamic-v1'
const OFFLINE_URL = '/offline.html'

// Assets critiques à mettre en cache
const CRITICAL_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192x192.png'
]

// Assets statiques à mettre en cache
const STATIC_ASSETS = [
  '/images/logo.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png'
]

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation...')
  
  event.waitUntil(
    Promise.all([
      // Cache des assets critiques
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[SW] Mise en cache des assets critiques')
        return cache.addAll(CRITICAL_ASSETS.filter(asset => !asset.includes('offline.html')))
      }),
      // Cache des assets statiques
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[SW] Mise en cache des assets statiques')
        return cache.addAll(STATIC_ASSETS.filter(asset => asset !== '/images/logo.png' || asset !== '/favicon.ico'))
      })
    ]).then(() => self.skipWaiting())
  )
})

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...')
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)) {
            console.log('[SW] Suppression ancien cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
  )
})

// Stratégies de cache
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') return

  // Stratégie pour les pages HTML
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            return response || caches.match(OFFLINE_URL)
          })
        })
    )
    return
  }

  // Stratégie pour les images
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((response) => {
          return caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, response.clone())
            return response
          })
        })
      })
    )
    return
  }

  // Stratégie pour les assets statiques (CSS, JS)
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((response) => {
          return caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, response.clone())
            return response
          })
        })
      })
    )
    return
  }

  // Stratégie Network First pour l'API
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => caches.match(request))
    )
    return
  }

  // Stratégie par défaut: Cache First
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request).then((response) => {
        return caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, response.clone())
          return response
        })
      })
    })
  )
})

// Gestion des notifications push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification de NDB Nuisibles',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'ndb-notification',
    requireInteraction: false,
    renotify: true,
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'view',
        title: 'Voir',
        icon: '/icons/check.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icons/close.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('NDB Nuisibles - Urgence', options)
  )
})

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('https://ndbnuisibles.com/urgence')
    )
  } else if (event.action === 'close') {
    event.notification.close()
  } else {
    event.waitUntil(
      clients.openWindow('https://ndbnuisibles.com')
    )
  }
})

// Synchronisation en arrière-plan
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncFormData())
  }
})

async function syncFormData() {
  const cache = await caches.open('form-data')
  const requests = await cache.keys()
  
  for (const request of requests) {
    const response = await cache.match(request)
    const data = await response.json()
    
    try {
      await fetch(request.url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      await cache.delete(request)
    } catch (error) {
      console.error('[SW] Sync failed:', error)
    }
  }
}