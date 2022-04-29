// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyCs-sOfKHOSn0EJUcGqf24oLcYJkQFxoWY",
  authDomain: "prueba-notif-push.firebaseapp.com",
  projectId: "prueba-notif-push",
  storageBucket: "prueba-notif-push.appspot.com",
  messagingSenderId: "533032349484",
  appId: "1:533032349484:web:cf0b211ef0b14927ba0689",
  measurementId: "G-7GD810LMX1"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
