self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : '루틴 실천 시간입니다!',
        icon: 'icon.png',
        badge: 'icon.png'
    };
    event.waitUntil(self.registration.showNotification('인크레틴 마스터', options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});