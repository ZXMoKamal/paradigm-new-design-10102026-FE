"use client";

import { useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";
import { auth } from "@/configs/firebase";
import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { toast } from "sonner";

export default function AdminLogin() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [verifyToken, setVerifyToken] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        // setError("");
        setLoading(true);

        try {
            const credential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = credential.user;

            const tokenResult =
                await user.getIdTokenResult(true);

            // const isAdmin =
            //     tokenResult.claims.admin === true;

            // if (!isAdmin) {
            //     await auth.signOut();

            //     setError(
            //         "You don't have permission to access the admin dashboard."
            //     );

            //     return;
            // }


            setVerifyToken(true);

        } catch (error) {
            console.log(error);

            toast.error("Invalid email or password.");
        }
        //  finally {
        //     setLoading(false);
        // }
    }

    useEffect(()=>{
        async function sendVerify(verifyTokenState){ 
        if(verifyTokenState){

            const user = auth.currentUser;
    
            if (!user) {
                throw new Error("Not authenticated");
            }
    
            const token = await user.getIdToken();
    
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL+"/admin/verifyUser.php",
                {
                    method: "GET",
    
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
    
            if(response.ok){
                
                const data = await response.json();
        
                console.log(data);
                
                localStorage.setItem("adminName",data.name)
                setLoading(false);
                router.replace("/admin/dashboard");
            }else{
                toast.error("login failed!")
            }
        }
    }
    sendVerify(verifyToken);
    },[verifyToken])

    return (
        <main className="min-h-screen flex items-center justify-center px-5">
            <form
                onSubmit={ handleLogin }
                className="w-full max-w-md rounded-xl bg-primary-dark p-8 shadow"
            >
                <h1 className="mb-2 text-2xl font-bold">
                    Admin Login
                </h1>

                <p className="mb-8 text-sm text-gray-500">
                    Sign in to access the dashboard.
                </p>

                {/* { error && (
                    <div className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        { error }
                    </div>
                ) } */}

                <div className="mb-4">
                    <label id="email" className="mb-2 block text-sm">
                        Email
                    </label>

                    <Input
                        htmlFor="email"
                        type="email"
                        value={ email }
                        onChange={ (e) =>
                            setEmail(e.target.value)
                        }
                        required
                        autoComplete="email"
                        className="w-full p-3"
                    />
                </div>

                <div className="mb-6">
                    <label id="password" className="mb-2 block text-sm">
                        Password
                    </label>

                    <Input
                        htmlFor="password"
                        type="password"
                        value={ password }
                        onChange={ (e) =>
                            setPassword(e.target.value)
                        }
                        required
                        autoComplete="current-password"
                        className="w-full p-3"
                    />
                </div>

                <Button
                    variant="outline"
                    type="submit"
                    disabled={ loading }
                    className="w-full p-3 text-text-primary disabled:opacity-50"
                >
                    { loading ? "Signing in..." : "Login" }
                </Button>
                {/* <Button
                    variant="outline"
                    type="submit"
                    disabled={ loading }
                    className="w-full p-3 text-text-primary disabled:opacity-50 my-5"
                >
                    { loading ? "Signing in..." : "Forget password" }
                </Button> */}
            </form>
        </main>
    );
}