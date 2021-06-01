import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAG6i8Kz1YlnWjkg-2GKcYwE9HJwW5cCUg",
  authDomain: "fir-cb3eb.firebaseapp.com",
  projectId: "fir-cb3eb",
  storageBucket: "fir-cb3eb.appspot.com",
  messagingSenderId: "720079146611",
  appId: "1:720079146611:web:202443df6f3b6da24f2406"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;