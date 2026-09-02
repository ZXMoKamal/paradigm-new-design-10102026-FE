// "use client";

// import { useEffect, useState } from "react";
// import {
//     signInWithEmailAndPassword,
// } from "firebase/auth";

// import { useRouter } from "next/navigation";
// import { auth } from "@/configs/firebase";
// import Button from "@/components/shared/button";
// import { Input } from "@/components/shared/input";
// import { toast } from "sonner";

// export default function AdminLogin() {
//     const router = useRouter();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const [verifyToken, setVerifyToken] = useState(false);

//     async function handleLogin(e) {
//         e.preventDefault();

//         // setError("");
//         setLoading(true);

//         try {
//             const credential = await signInWithEmailAndPassword(
//                 auth,
//                 email,
//                 password
//             );

//             const user = credential.user;

//             const tokenResult =
//                 await user.getIdTokenResult(true);

//             // const isAdmin =
//             //     tokenResult.claims.admin === true;

//             // if (!isAdmin) {
//             //     await auth.signOut();

//             //     setError(
//             //         "You don't have permission to access the admin dashboard."
//             //     );

//             //     return;
//             // }


//             setVerifyToken(true);

//         } catch (error) {
//             console.log(error);

//             toast.error("Invalid email or password.");
//         }
//         //  finally {
//         //     setLoading(false);
//         // }
//     }

//     useEffect(()=>{
//         async function sendVerify(verifyTokenState){ 
//         if(verifyTokenState){

//             const user = auth.currentUser;
    
//             if (!user) {
//                 throw new Error("Not authenticated");
//             }
    
//             const token = await user.getIdToken();
    
//             const response = await fetch(
//                 process.env.NEXT_PUBLIC_API_URL+"/admin/verifyUser.php",
//                 {
//                     method: "GET",
    
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );
    
//             if(response.ok){
                
//                 const data = await response.json();
        
//                 console.log(data);
                
//                 localStorage.setItem("adminName",data.name)
//                 setLoading(false);
//                 router.replace("/admin/dashboard");
//             }else{
//                 toast.error("login failed!")
//             }
//         }
//     }
//     sendVerify(verifyToken);
//     },[verifyToken])

//     return (
//         <main className="min-h-screen flex items-center justify-center px-5">
//             <form
//                 onSubmit={ handleLogin }
//                 className="w-full max-w-md rounded-xl bg-primary-dark p-8 shadow"
//             >
//                 <h1 className="mb-2 text-2xl font-bold">
//                     Admin Login
//                 </h1>

//                 <p className="mb-8 text-sm text-gray-500">
//                     Sign in to access the dashboard.
//                 </p>

//                 {/* { error && (
//                     <div className="mb-5 rounded-lg bg-red-50 p-3 text-sm text-red-600">
//                         { error }
//                     </div>
//                 ) } */}

//                 <div className="mb-4">
//                     <label id="email" className="mb-2 block text-sm">
//                         Email
//                     </label>

//                     <Input
//                         htmlFor="email"
//                         type="email"
//                         value={ email }
//                         onChange={ (e) =>
//                             setEmail(e.target.value)
//                         }
//                         required
//                         autoComplete="email"
//                         className="w-full p-3"
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label id="password" className="mb-2 block text-sm">
//                         Password
//                     </label>

//                     <Input
//                         htmlFor="password"
//                         type="password"
//                         value={ password }
//                         onChange={ (e) =>
//                             setPassword(e.target.value)
//                         }
//                         required
//                         autoComplete="current-password"
//                         className="w-full p-3"
//                     />
//                 </div>

//                 <Button
//                     variant="outline"
//                     type="submit"
//                     disabled={ loading }
//                     className="w-full p-3 text-text-primary disabled:opacity-50"
//                 >
//                     { loading ? "Signing in..." : "Login" }
//                 </Button>
//                 {/* <Button
//                     variant="outline"
//                     type="submit"
//                     disabled={ loading }
//                     className="w-full p-3 text-text-primary disabled:opacity-50 my-5"
//                 >
//                     { loading ? "Signing in..." : "Forget password" }
//                 </Button> */}
//             </form>
//         </main>
//     );
// }






"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Turnstile from "react-turnstile";

import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { auth } from "@/configs/firebase";
import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";


export default function AdminLogin() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [captchaToken, setCaptchaToken] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    const [verifyToken, setVerifyToken] = useState(false);

    const formik = useFormik({

        initialValues: {
            email: "",
            password: "",
        },


        validationSchema: Yup.object({

            email: Yup.string()
                .trim()
                .email("Enter a valid email")
                .max(100, "Email is too long")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .max(100, "Password is too long")
                .required("Password is required"),

        }),


        onSubmit: async (values, { setSubmitting }) => {

            setCaptchaError("");


            /*
            |--------------------------------------------------------------------------
            | Check Turnstile
            |--------------------------------------------------------------------------
            */

            if (!captchaToken) {

                setCaptchaError(
                    "Please complete the security verification"
                );

                setSubmitting(false);

                return;
            }

            setLoading(true);

            try {

                /*
                |--------------------------------------------------------------------------
                | Firebase Login
                |--------------------------------------------------------------------------
                */

                const credential =
                    await signInWithEmailAndPassword(
                        auth,
                        values.email.trim(),
                        values.password
                    );


                /*
                |--------------------------------------------------------------------------
                | Force token refresh so custom claims are current
                |--------------------------------------------------------------------------
                */

                // const tokenResult =
                //     await credential.user.getIdTokenResult(true);


                /*
                |--------------------------------------------------------------------------
                | Only admins can login
                |--------------------------------------------------------------------------
                */

                // if (tokenResult.claims.admin !== true) {

                //     await signOut(auth);

                //     toast.error(
                //         "You are not authorized to access the admin dashboard"
                //     );

                //     return;
                // }


                //----------------
                setVerifyToken(true);


                /*
                |--------------------------------------------------------------------------
                | Success
                |--------------------------------------------------------------------------
                */

                // toast.success("Login successful");

                // router.replace("/admin");

            } catch (error) {

                // console.error(error);

                /*
                |--------------------------------------------------------------------------
                | Don't expose Firebase internal error details
                |--------------------------------------------------------------------------
                */

                toast.error(
                    "Invalid email or password"
                );

            } 
            

        },

    });

    useEffect(()=>{
        async function sendVerify(verifyTokenState){ 
        if(verifyTokenState){

            const user = auth.currentUser;
    
            if (!user) {
                throw new Error("Not authenticated");
            }
    
            const token = await user.getIdToken();
    
            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/admin/verifyUser.php",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        captchaToken: verifyToken,
                    }),
                }
            );
    
            if(response.ok){
                
                const data = await response.json();
        
                // console.log(data);
                
                localStorage.setItem("adminName",data.name)
                setLoading(false);
                router.replace("/admin/dashboard");
            }else{
                // toast.error("login failed!")
                await signOut(auth);
                toast.error(
                    "Verification failed"
                );
            }
        }
    }
    sendVerify(verifyToken);
    },[verifyToken])


    /*
    |--------------------------------------------------------------------------
    | Reset Password
    |--------------------------------------------------------------------------
    */

    const handleForgetPassword = async () => {

        const email = formik.values.email.trim();


        /*
        |--------------------------------------------------------------------------
        | Validate email before sending reset
        |--------------------------------------------------------------------------
        */

        if (!email) {

            formik.setFieldTouched("email", true);

            toast.error(
                "Enter your email first"
            );

            return;
        }


        try {

            await Yup.string()
                .email()
                .required()
                .validate(email);

        } catch {

            formik.setFieldTouched("email", true);

            toast.error(
                "Enter a valid email address"
            );

            return;
        }


        try {

            await sendPasswordResetEmail(
                auth,
                email
            );


            /*
            |--------------------------------------------------------------------------
            | Generic success message
            |--------------------------------------------------------------------------
            |
            | Avoid telling attackers whether an email exists.
            |
            */

            toast.success(
                "If this email belongs to an account, a password reset email has been sent"
            );

        } catch (error) {

            console.error(error);

            toast.error(
                "Unable to send password reset email"
            );

        }

    };


    return (

        <main
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-priamry
                px-5
            "
        >

            <form
                onSubmit={formik.handleSubmit}
                className="
                    w-full
                    max-w-md
                    rounded-2xl
                    bg-primary-dark
                    p-8
                    shadow-lg
                "
            >

                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-3xl font-semibold text-text-primary">
                        Admin Login
                    </h1>

                    <p className="mt-2 text-sm text-secondary">
                        Sign in to access the dashboard.
                    </p>

                </div>


                {/* Email */}

                <div className="mb-5">

                    <label
                        htmlFor="email"
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-text-primary
                        "
                    >
                        Email
                    </label>


                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="admin@example.com"

                        {...formik.getFieldProps("email")}

                        className={`
                            w-full
                            outline-none
                            transition
                            

                            ${
                                formik.touched.email &&
                                formik.errors.email

                                    ? "border-red-500 "

                                    : " "
                            }
                        `}
                    />


                    {
                        formik.touched.email &&
                        formik.errors.email && (

                            <p className="mt-1 text-sm text-red-500">
                                {formik.errors.email}
                            </p>

                        )
                    }

                </div>


                {/* Password */}

                <div className="mb-3">

                    <label
                        htmlFor="password"
                        className="
                            mb-2
                            block
                            text-sm
                            font-medium
                            text-text-primary
                        "
                    >
                        Password
                    </label>


                    <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="••••••••"

                        {...formik.getFieldProps("password")}

                        className={`
                            w-full
                         
                            outline-none
                            transition
                       

                            ${
                                formik.touched.password &&
                                formik.errors.password

                                    ? "border-red-500 "

                                    : " "
                            }
                        `}
                    />


                    {
                        formik.touched.password &&
                        formik.errors.password && (

                            <p className="mt-1 text-sm text-red-500">
                                {formik.errors.password}
                            </p>

                        )
                    }

                </div>


                {/* Forget Password */}

                <div className="mb-6 text-right">

                    <button
                        type="button"
                        onClick={handleForgetPassword}

                        className="
                            text-sm
                            text-text-primary
                            underline
                            underline-offset-4
                            transition
                            hover:text-secondary
                        "
                    >
                        Forgot password?
                    </button>

                </div>


                {/* Cloudflare Turnstile */}

                <div className="mb-5">

                    <Turnstile
                        sitekey={
                            process.env
                                .NEXT_PUBLIC_TURNSTILE_SITE_KEY
                        }

                        onVerify={(token) => {

                            setCaptchaToken(token);
                            setCaptchaError("");

                        }}

                        onExpire={() => {

                            setCaptchaToken("");

                        }}

                        onError={() => {

                            setCaptchaToken("");

                            setCaptchaError(
                                "Security verification failed"
                            );

                        }}
                    />


                    {
                        captchaError && (

                            <p className="mt-2 text-sm text-red-500">
                                {captchaError}
                            </p>

                        )
                    }

                </div>


                {/* Submit */}

                <Button
                variant={"outline"}
                    type="submit"
                    disabled={formik.isSubmitting}

                    className="
                        w-full
                       
                        px-5
                        py-3
                        font-medium
                        text-text-primary
                        transition
                        hover:bg-secondary
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >

                    {
                        formik.isSubmitting || loading
                            ? "Signing in..."
                            : "Login"
                    }

                </Button>

            </form>

        </main>

    );

}
