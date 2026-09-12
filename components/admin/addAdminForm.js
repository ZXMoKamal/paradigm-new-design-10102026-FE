"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { auth } from "@/configs/firebase";

export default function AddAdminForm() {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .trim()
                .min(2, "Name must be at least 2 characters")
                .max(100, "Name must be less than 100 characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .max(100, "Password must be less than 100 characters")
                .required("Password is required"),

            confirmPassword: Yup.string()
                .oneOf(
                    [Yup.ref("password")],
                    "Passwords do not match"
                )
                .required("Please confirm the password"),
        }),

        onSubmit: async (values, { resetForm }) => {
            try {
                setLoading(true);

                // Make sure an admin is logged in
                const currentUser = auth.currentUser;

                if (!currentUser) {
                    toast.error("You must be logged in");
                    return;
                }

                // Get Firebase ID token
                const token = await currentUser.getIdToken();

                const formData = new FormData();

                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("password", values.password);

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/admin/createAdmin.php`,
                    {
                        method: "POST",

                        headers: {
                            Authorization: `Bearer ${token}`,
                        },

                        body: formData,
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    toast.error(
                        data.error || "Failed to create admin"
                    );
                    return;
                }

                toast.success("Admin account created successfully");

                resetForm();

            } catch (error) {

                console.error(error);

                toast.error(
                    "Something went wrong while creating the admin"
                );

            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-2 gap-6"
        >

            {/* Name */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name">
                    Name
                </label>

                <Input
                    id="name"
                    type="text"
                    placeholder="Enter admin name"
                    {...formik.getFieldProps("name")}
                />

                {formik.touched.name && formik.errors.name && (
                    <p className="text-sm text-red-500">
                        {formik.errors.name}
                    </p>
                )}
            </div>


            {/* Email */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email">
                    Email
                </label>

                <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    {...formik.getFieldProps("email")}
                />

                {formik.touched.email && formik.errors.email && (
                    <p className="text-sm text-red-500">
                        {formik.errors.email}
                    </p>
                )}
            </div>


            {/* Password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="password">
                    Password
                </label>

                <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    {...formik.getFieldProps("password")}
                />

                {formik.touched.password && formik.errors.password && (
                    <p className="text-sm text-red-500">
                        {formik.errors.password}
                    </p>
                )}
            </div>


            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword">
                    Confirm Password
                </label>

                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    {...formik.getFieldProps("confirmPassword")}
                />

                {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                        <p className="text-sm text-red-500">
                            {formik.errors.confirmPassword}
                        </p>
                    )}
            </div>


            {/* Submit */}
            <Button
                type="submit"
                disabled={loading}
                className="max-w-[250px]"
            >
                {loading ? "Creating..." : "Create Admin"}
            </Button>

        </form>
    );
}