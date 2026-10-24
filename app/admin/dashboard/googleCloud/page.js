"use client";

import Google from "@/components/icons/google";
import Button from "@/components/shared/button";
import { auth } from "@/configs/firebase";
import { useAdminAuth } from "@/context/adminACLProvider";
import { useState } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function GoogleCloud() {

//-    // const handleGoogleAuth = async () => {

    //     try {

    //         const user = auth.currentUser;

    //         if (!user) {
    //             alert("You must be logged in first.");
    //             return;
    //         }

    //         // Get Firebase ID token
    //         const token = await user.getIdToken();

    //         // Call PHP authentication endpoint
    //         const response = await fetch(
    //             `${API_URL}/admin/searchConsoleAuth.php`,
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             }
    //         );

    //         /*
    //          * The PHP endpoint will normally redirect to Google.
    //          * fetch() does NOT work well for this because the browser
    //          * follows the redirect inside the fetch request instead
    //          * of navigating the user to Google's login page.
    //          *
    //          * Therefore, we don't actually want to use fetch here
    //          * for the OAuth redirect.
    //          */

    //         if (!response.ok) {
    //             const data = await response.json();

    //             throw new Error(
    //                 data.error || "Google authentication failed."
    //             );
    //         }

    //     } catch (error) {

    //         console.error(error);

    //         alert(error.message);
    //     }
    // };
//-

    const {
        permissions,
        loading
    } = useAdminAuth();
    
    function hasAccess(module, action) {
    
        if (loading || !permissions) {
            return false;
        }
    
        return permissions?.[module]?.[action] === true;
    }


const handleGoogleAuth = async () => {

    try {
if(hasAccess("googleCloud","view")){
        const user = auth.currentUser;

        if (!user) {
            alert("You must be logged in first.");
            return;
        }


        // Get Firebase ID token
        const token = await user.getIdToken();


        // Ask PHP to start Google OAuth
        const response = await fetch(
            `${API_URL}/admin/searchConsoleAuth.php`,
            {
                method: "GET",

                headers: {
                    "ngrok-skip-browser-warning": "true",
                    Authorization: `Bearer ${token}`,
                },
            }
        );


        const data = await response.json();


        if (!response.ok || !data.success) {

            throw new Error(
                data.error ||
                "Google authentication failed."
            );
        }


        // ---------------------------------------------
        // IMPORTANT:
        // This is browser navigation, NOT fetch()
        // ---------------------------------------------

        window.open(data.authUrl, '_blank');
    }

    } catch (error) {

        console.error(error);

        alert(error.message);
    }
};


    if(!hasAccess("googleCloud","view")){
        return <span>You don't have access right to view google cloud</span>
    }

    return (
        <div className="flex justify-center items-center flex-col h-full">

            <h1 className="text-[42px]">
                Google Cloud
            </h1>

            <p>
                Login to Google Cloud to allow access to Google services
            </p>

            <br />

            <Button onClick={handleGoogleAuth}>
                <Google className="w-8 h-8 fill-text-dark" />
                Auth Google Cloud
            </Button>

        </div>
    );
}
