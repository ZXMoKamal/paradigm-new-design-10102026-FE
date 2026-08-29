// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT1EN1tSi-wv-QspirWksgEIVIUzOAxEs",
    authDomain: "paradigm-capital-group.firebaseapp.com",
    projectId: "paradigm-capital-group",
    storageBucket: "paradigm-capital-group.firebasestorage.app",
    messagingSenderId: "699883991239",
    appId: "1:699883991239:web:cb4038e9678f6d68104ee2"
};

// Initialize Firebase

const app = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

export const auth = getAuth(app);