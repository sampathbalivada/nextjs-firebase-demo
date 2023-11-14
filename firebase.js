// firebase.js

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA91-FPq9m37QuU1sbuVQUrVJM6kPmXv6I",
    authDomain: "nextjs-firebase-demo-e256f.firebaseapp.com",
    databaseURL: "https://nextjs-firebase-demo-e256f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nextjs-firebase-demo-e256f",
    storageBucket: "nextjs-firebase-demo-e256f.appspot.com",
    messagingSenderId: "963551319937",
    appId: "1:963551319937:web:92c3762d49371f68b3ba80"
};


const app = initializeApp(firebaseConfig);

export default app;
