// "use client";

// import {
//     initializeAppCheck,
//     ReCaptchaEnterpriseProvider,
// } from "firebase/app-check";
// import { app } from "./firebase";

// // import { firebaseApp } from "./client";

// let appCheck;

// export function initializeFirebaseAppCheck() {
//     if (typeof window === "undefined") {
//         return null;
//     }

//     if (appCheck) {
//         return appCheck;
//     }

//     // Enable Firebase App Check debug mode during development.
//     if (process.env.NODE_ENV === "development") {
//         window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
//     }

//     appCheck = initializeAppCheck(app, {
//         provider: new ReCaptchaEnterpriseProvider(
//             process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY
//         ),

//         isTokenAutoRefreshEnabled: true,
//     });

//     return appCheck;
// }



"use client";

import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
import { app } from "./firebase";

// import { firebaseApp } from "./client";

let appCheckInitialized = false;
let appCheck;
export function initializeFirebaseAppCheck() {
    if (typeof window === "undefined") {
        return;
    }

    if (appCheckInitialized) {
        return;
    }

    /*
     * Tell Firebase that this is a development environment.
     *
     * Firebase will print the debug token in the browser console.
     */
    if (process.env.NODE_ENV === "development") {
        window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(
            process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY
        ),

        isTokenAutoRefreshEnabled: true,
    });

    appCheckInitialized = true;

    return appCheck;
}