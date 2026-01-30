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
// sw.js 파일 하단에 추가
self.addEventListener('fetch', (event) => {
  // 앱 설치 조건을 충족하기 위한 빈 핸들러
  // 나중에는 오프라인 캐싱 기능을 여기에 넣을 수 있습니다.
});
