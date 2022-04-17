import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initalizeAuthnentiction = () => {
    initializeApp(firebaseConfig)
}

export default initalizeAuthnentiction;