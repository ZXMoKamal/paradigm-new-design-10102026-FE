"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { auth } from "@/configs/firebase";
import AdminPermissions from "./adminACL";


const initialPermissions = {
    dashboard: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    events: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    services: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    blog: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    editPages: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    contacts: {
        view: false,
        create: false,
        edit: false,
        delete: false
    },

    manageAdmins: {
        view: false,
        create: false,
        edit: false,
        delete: false
    }
};


export default function EditAdminForm({
    admin,
    onClose,
    onUpdated,
    allowEdit
}) {

    const [loading, setLoading] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | Formik
    |--------------------------------------------------------------------------
    */

    const formik = useFormik({

        initialValues: {
            uid: "",
            name: "",
            email: "",
            permissions: initialPermissions,
        },

        enableReinitialize: true,

        validationSchema: Yup.object({

            name: Yup.string()
                .trim()
                .min(2, "Name must be at least 2 characters")
                .max(100, "Name must be less than 100 characters")
                .required("Name is required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),

        }),

        onSubmit: async (values) => {

            try {
                if(allowEdit){
                setLoading(true);


                /*
                |--------------------------------------------------------------------------
                | Current logged-in user
                |--------------------------------------------------------------------------
                */

                const currentUser = auth.currentUser;

                if (!currentUser) {

                    toast.error(
                        "You must be logged in"
                    );

                    return;
                }


                /*
                |--------------------------------------------------------------------------
                | Firebase token
                |--------------------------------------------------------------------------
                */

                const token =
                    await currentUser.getIdToken();


                /*
                |--------------------------------------------------------------------------
                | Send request
                |--------------------------------------------------------------------------
                */

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/admin/editAdmin.php`,
                    {
                        method: "PUT",

                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },

                        body: JSON.stringify({
                            uid: values.uid,
                            name: values.name,
                            email: values.email,
                            permissions: values.permissions,
                        }),
                    }
                );


                const data = await response.json();


                /*
                |--------------------------------------------------------------------------
                | Handle error
                |--------------------------------------------------------------------------
                */

                if (!response.ok) {

                    toast.error(
                        data.error ||
                        "Failed to update admin"
                    );

                    return;
                }


                /*
                |--------------------------------------------------------------------------
                | Success
                |--------------------------------------------------------------------------
                */

                toast.success(
                    "Admin updated successfully"
                );


                if (onUpdated) {
                    onUpdated(data.admin);
                }


                if (onClose) {
                    onClose();
                }

            } else{
                toast.error( "you don't have access to Edit event");
            }
            } catch (error) {

                // console.error(error);

                toast.error(
                    "Something went wrong while updating the admin"
                );

            } finally {

                setLoading(false);

            }
        },
    });


    /*
    |--------------------------------------------------------------------------
    | Load selected admin
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!admin) {
            return;
        }


        formik.setValues({

            uid: admin.uid || "",

            name: admin.name || "",

            email: admin.email || "",

            permissions: {
                ...initialPermissions,
                ...(admin.permissions || {}),
            },

        });

    }, [admin]);


    /*
    |--------------------------------------------------------------------------
    | No admin selected
    |--------------------------------------------------------------------------
    */

    if (!admin) {
        return null;
    }


    return (
        <div
            className="
                fixed
                inset-0
                z-2000
                flex
                items-center
                justify-center
                bg-black/60
                p-4
            "
            onMouseDown={(e) => {

                if (e.target === e.currentTarget) {

                    if (!loading && onClose) {
                        onClose();
                    }

                }

            }}
        >

            {/* Modal */}
            <div
                className="
                    relative
                    flex
                    max-h-[90vh]
                    w-full
                    max-w-5xl
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-2xl
                    dark:bg-[#042a37]
                "
            >

                {/* Header */}
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-200
                        px-6
                        py-5
                        dark:border-white/10
                    "
                >

                    <div>

                        <h2
                            className="
                                text-xl
                                font-semibold
                                text-[#042a37]
                                dark:text-white
                            "
                        >
                            Edit Admin
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-gray-500
                                dark:text-gray-300
                            "
                        >
                            Update administrator information
                            and permissions.
                        </p>

                    </div>


                    {/* Close */}
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-xl
                            text-gray-500
                            transition
                            hover:bg-gray-100
                            hover:text-gray-800
                            disabled:cursor-not-allowed
                            dark:hover:bg-white/10
                            dark:hover:text-white
                        "
                    >
                        ×
                    </button>

                </div>


                {/* Content */}
                <form
                    onSubmit={formik.handleSubmit}
                    className="
                        flex
                        flex-1
                        flex-col
                        overflow-hidden
                    "
                >

                    <div
                        className="
                            flex-1
                            overflow-y-auto
                            p-6
                        "
                    >

                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-6
                                md:grid-cols-2
                            "
                        >

                            {/* Name */}
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="edit-admin-name"
                                >
                                    Name
                                </label>

                                <Input
                                    id="edit-admin-name"
                                    type="text"
                                    placeholder="Enter admin name"
                                    {...formik.getFieldProps(
                                        "name"
                                    )}
                                />

                                {formik.touched.name &&
                                    formik.errors.name && (
                                        <p className="text-sm text-red-500">
                                            {formik.errors.name}
                                        </p>
                                    )}

                            </div>


                            {/* Email */}
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="edit-admin-email"
                                >
                                    Email
                                </label>

                                <Input
                                    id="edit-admin-email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    {...formik.getFieldProps(
                                        "email"
                                    )}
                                />

                                {formik.touched.email &&
                                    formik.errors.email && (
                                        <p className="text-sm text-red-500">
                                            {formik.errors.email}
                                        </p>
                                    )}

                            </div>


                            {/* ACL */}
                            <div className="col-span-1 md:col-span-2">

                                <AdminPermissions
                                    permissions={
                                        formik.values.permissions
                                    }

                                    setPermissions={(value) => {

                                        const nextPermissions =
                                            typeof value === "function"
                                                ? value(
                                                    formik.values.permissions
                                                )
                                                : value;

                                        formik.setFieldValue(
                                            "permissions",
                                            nextPermissions
                                        );

                                    }}
                                />

                            </div>

                        </div>

                    </div>


                    {/* Footer */}
                    <div
                        className="
                            flex
                            items-center
                            justify-end
                            gap-3
                            border-t
                            border-gray-200
                            px-6
                            py-4
                            dark:border-white/10
                        "
                    >

                        <Button
                            type="button"
                            disabled={loading}
                            onClick={onClose}
                            className="
                                max-w-[150px]
                                bg-gray-200
                                text-[#042a37]
                                hover:bg-gray-300
                            "
                        >
                            Cancel
                        </Button>


                        <Button
                            type="submit"
                            disabled={loading}
                            className="max-w-[200px]"
                        >
                            {loading
                                ? "Updating..."
                                : "Update"}
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
}