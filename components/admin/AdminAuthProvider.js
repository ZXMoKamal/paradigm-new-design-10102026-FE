"use client";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";

import { auth } from "@/configs/firebase";

export default function AdminAuthProvider({
    children,
}) {
    const router = useRouter();
    const pathname = usePathname();

    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {console.log(user);
                if (!user) {
                    setAuthorized(false);
                    setLoading(false);

                    if (pathname !== "/admin/login") {
                        router.replace("/admin/login");
                    }

                    return;
                }

                try {
                    const tokenResult =
                        await user.getIdTokenResult();

                    // const isAdmin =
                    //     tokenResult.claims.admin === true;

                    // if (!isAdmin) {
                    //     await auth.signOut();

                    //     setAuthorized(false);
                    //     setLoading(false);

                    //     router.replace("/admin/login");

                    //     return;
                    // }

                    setAuthorized(true);
                    setLoading(false);
                } catch (error) {
                    console.error(error);

                    await auth.signOut();

                    setAuthorized(false);
                    setLoading(false);

                    router.replace("/admin/login");
                }
            }
        );

        return () => unsubscribe();
    }, [router, pathname]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!authorized) {
        return null;
    }

    return children;
}