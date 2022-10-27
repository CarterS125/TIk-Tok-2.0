import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjsCu_QiPWRUeEu-wwYGXMpQ9jKycHWiE",
  authDomain: "tiktok-clone-5bec5.firebaseapp.com",
  databaseURL: "https://tiktok-clone-5bec5.firebaseio.com",
  projectId: "tiktok-clone-5bec5",
  storageBucket: "tiktok-clone-5bec5.appspot.com",
  messagingSenderId: "540680246289",
  appId: "1:540680246289:web:769bf9d8ca253bd38bcdb0",
  measurementId: "G-NMX5LVS5Z0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
