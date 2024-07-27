import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyD4uyGIS5M11GjI4AQ7DNGw8vXLoVuyVx4",
    authDomain: "muncipaltaxnotification.firebaseapp.com",
    projectId: "muncipaltaxnotification",
    storageBucket: "muncipaltaxnotification.appspot.com",
    messagingSenderId: "1050493027431",
    appId: "1:1050493027431:web:2a1535ee8ed0327e2580c2",
    measurementId: "G-TJZLRXCBSB"
  };

 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const messaging = getMessaging(app);
