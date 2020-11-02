import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHDUwcM0zO4yMCoyazo4w-HOeKfGsQL2g",
    authDomain: "phone-book-fe436.firebaseapp.com",
    databaseURL: "https://phone-book-fe436.firebaseio.com",
    projectId: "phone-book-fe436",
    storageBucket: "phone-book-fe436.appspot.com",
    messagingSenderId: "410083027161",
    appId: "1:410083027161:web:e69ec743153a72d48df6c8"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;