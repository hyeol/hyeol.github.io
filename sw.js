'use strict';

self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.', event);
    var data = JSON.parse(event.data.text());
    if(data['noti_noshow']) return;
    const title = data.title;
    const options = {
        body: data.desc,
        icon: data.image,
        data: data
    };
    if (data.badge) {
        options.badge = data.badge;
    }
    if (data.big_image) {
        options.image = data.big_image;
    }
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
    console.log('[Service Worker] Notification click Received.', event);
    var url = event.notification.data.url;
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
});
