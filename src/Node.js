var firebaseConfig = {
    apiKey: "AIzaSyA77qVSBMYzYmaFtzPm4vsuFYLccfuVvXY",
    authDomain: "trollo-36d64.firebaseapp.com",
    databaseURL: "https://trollo-36d64.firebaseio.com",
    projectId: "trollo-36d64",
    storageBucket: "trollo-36d64.appspot.com",
    messagingSenderId: "457350774395",
    appId: "1: 457350774395: web: a827a9e172f28d38126cde",
    measurementId: "G-XDTV6S6QSE",
  };

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://trollo-36d64.firebaseio.com'
  });

  

  // Initialize the default app
var admin = require('firebase-admin');
var app = admin.initializeApp();
// Initialize the default app
var defaultApp = admin.initializeApp(defaultApp);

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
var defaultAuth = defaultApp.auth();
var defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

