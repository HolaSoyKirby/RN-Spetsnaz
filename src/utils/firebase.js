import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrB2WzTgzf6qqUGqG6h51BETSsW1zMX2E",
    authDomain: "rn-spetsnaz.firebaseapp.com",
    projectId: "rn-spetsnaz",
    storageBucket: "rn-spetsnaz.appspot.com",
    messagingSenderId: "145747262654",
    appId: "1:145747262654:web:0ee789110fc7b6b7d132ef"
};

export default firebase.initializeApp(firebaseConfig);