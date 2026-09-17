"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/configs/firebase";

const AdminAuthContext = createContext(null);


export default function AdminAuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [permissions, setPermissions] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (firebaseUser) => {

                try {

                    if (!firebaseUser) {

                        setUser(null);
                        setPermissions(null);

                        return;
                    }


                    /*
                    |--------------------------------------------------------------------------
                    | Get Firebase token
                    |--------------------------------------------------------------------------
                    */

                    const token =
                        await firebaseUser.getIdToken();


                    /*
                    |--------------------------------------------------------------------------
                    | Get current admin + ACL
                    |--------------------------------------------------------------------------
                    */

                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/admin/getACL.php`,
                        {
                            method: "GET",

                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );


                    const data = await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.error ||
                            "Failed to get admin permissions"
                        );
                    }


                    /*
                    |--------------------------------------------------------------------------
                    | Save user
                    |--------------------------------------------------------------------------
                    */

                    setUser({
                        ...firebaseUser,
                        id: data.adminId,
                    });


                    /*
                    |--------------------------------------------------------------------------
                    | Save ACL
                    |--------------------------------------------------------------------------
                    */

                    setPermissions(
                        data.permissions || {}
                    );


                } catch (error) {

                    console.log(error);

                    setUser(null);
                    setPermissions(null);

                } finally {

                    setLoading(false);
                }
            }
        );


        return () => unsubscribe();

    }, []);


    return (
        <AdminAuthContext.Provider
            value={{
                user,
                permissions,
                loading,
            }}
        >
            {children}
        </AdminAuthContext.Provider>
    );
}


export function useAdminAuth() {

    const context =
        useContext(AdminAuthContext);


    if (!context) {

        throw new Error(
            "useAdminAuth must be used inside AdminAuthProvider"
        );
    }


    return context;
}