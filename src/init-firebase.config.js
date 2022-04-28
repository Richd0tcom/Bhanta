
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCuK367zdmOrLppWRInpXZ47aKIS1TN2KU",
    authDomain: "my-chat-app-91848.firebaseapp.com",
    projectId: "my-chat-app-91848",
    storageBucket: "my-chat-app-91848.appspot.com",
    messagingSenderId: "348085144252",
    appId: "1:348085144252:web:fb61d171b24343d5b85eb9",
    measurementId: "G-0LCJ5650S8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, db, provider }