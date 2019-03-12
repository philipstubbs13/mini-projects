console.log('Service Worker loaded...');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('push received...');
  self.registration.showNotification(data.title, {
    body: 'Notified by Traversy Media',
    icon: 'http://image.ibb.co/frY0Fd/tmlogo.png'
  });
});