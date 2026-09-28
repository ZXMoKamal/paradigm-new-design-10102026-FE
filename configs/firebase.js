// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//     initializeAppCheck,
//     ReCaptchaV3Provider,
// } from "firebase/app-check";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDT1EN1tSi-wv-QspirWksgEIVIUzOAxEs",
//     authDomain: "paradigm-capital-group.firebaseapp.com",
//     projectId: "paradigm-capital-group",
//     storageBucket: "paradigm-capital-group.firebasestorage.app",
//     messagingSenderId: "699883991239",
//     appId: "1:699883991239:web:cb4038e9678f6d68104ee2"
// };

// // Initialize Firebase

//     export const app = getApps().length
//         ? getApp()
//         : initializeApp(firebaseConfig);
    
//     export const auth = getAuth(app);

//     // let appCheck = null;

//     // if (typeof window !== "undefined") {
//     //     if (process.env.NODE_ENV === "development") {
//     //         self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
//     //     }

//     //     appCheck = initializeAppCheck(app, {
//     //         provider: new ReCaptchaV3Provider(
//     //             process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY
//     //         ),
//     //         isTokenAutoRefreshEnabled: true,
//     //     });
//     // }

//     // if (typeof window !== "undefined") {
//     //     self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

//     //     initializeAppCheck(app, {
//     //         provider: new CustomProvider({
//     //             getToken: async () => {
//     //                 // Firebase's debug provider handles the token
//     //                 return {
//     //                     token: self.FIREBASE_APPCHECK_DEBUG_TOKEN,
//     //                 };
//     //             },
//     //         }),
//     //         isTokenAutoRefreshEnabled: true,
//     //     });
//     // }



// configs/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDT1EN1tSi-wv-QspirWksgEIVIUzOAxEs",
    authDomain: "paradigm-capital-group.firebaseapp.com",
    projectId: "paradigm-capital-group",
    storageBucket: "paradigm-capital-group.firebasestorage.app",
    messagingSenderId: "699883991239",
    appId: "1:699883991239:web:cb4038e9678f6d68104ee2",
     locationId: "us-central1",
};

// Initialize the Firebase app (singleton guard)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

// App Check must be initialized client-side only
if (typeof window !== "undefined") {

    // MUST be set before initializeAppCheck is called
    if (process.env.NODE_ENV === "development") {
        // Pinned token → no more UUID drift between sessions
        self.FIREBASE_APPCHECK_DEBUG_TOKEN =
            process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN || true;
    }

    initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(
            process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY
        ),
        isTokenAutoRefreshEnabled: true,
    });
}