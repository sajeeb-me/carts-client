import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDDWNQo-kUriU9aqAiatdmxxxuHnyki2UA",
    authDomain: "carts-68435.firebaseapp.com",
    projectId: "carts-68435",
    storageBucket: "carts-68435.appspot.com",
    messagingSenderId: "996674345304",
    appId: "1:996674345304:web:7d9aef46f42d1019a4ed2d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;