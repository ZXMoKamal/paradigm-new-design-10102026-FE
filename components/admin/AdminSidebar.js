"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";
import Button from "../shared/button";

const menu = [
    // {
    //     name: "Dashboard",
    //     href: "/admin/dashboard",
    // },
    {
        name: "Events",
        href: "/admin/dashboard/events",
    },
    {
        name: "Blog",
        href: "/admin/dashboard/blog",
    },
    {
        name: "Services",
        href: "/admin/dashboard/services",
    },
    {
        name: "Contacts",
        href: "/admin/dashboard/contacts",
    },
];
const pages = [
    {
        name: "Home",
        href: "/admin/404",
    },
    {
        name: "Our Story",
        href: "/admin/dashboard/404",
    },
    {
        name: "Past Events",
        href: "/admin/dashboard/404",
    },
    {
        name: "Blog",
        href: "/admin/dashboard/404",
    },
    {
        name: "Social Responsibility",
        href: "/admin/dashboard/404",
    },
    {
        name: "Contact Us",
        href: "/admin/dashboard/404",
    },
    {
        name: "Careers",
        href: "/admin/dashboard/404",
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        try {
            await signOut(auth);

            router.replace("/admin/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <aside className="sticky top-0 h-screen w-64 shrink-0 p-5 text-text-primary bg-primary-dark pt-30">
            <div className="mb-10">
                <h1 className="text-xl font-bold text-text-primary">
                    {localStorage.getItem("adminName")}
                </h1>

                <p className="text-sm text-secondary">
                    Admin Dashboard
                </p>
            </div>

            <nav className="space-y-2">
                <Link
                    href={ "/admin/dashboard" }
                    className={ `block rounded-lg px-4 py-3 transition "text-text-primary hover:bg-secondary hover:text-primary-dark` }
                >
                    { "Dashboard" }
                </Link>
                <hr/>
                { menu.map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            className={ `block rounded-lg px-4 py-3 transition ${active
                                    ? "bg-white text-black"
                                : "text-text-primary hover:bg-secondary hover:text-primary-dark"
                                }` }
                        >
                            { item.name }
                        </Link>
                    );
                }) }
                <hr/>
                { pages.map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            className={ `block rounded-lg px-4 py-3 transition ${active
                                    ? "bg-white text-black"
                                : "text-text-primary hover:bg-secondary hover:text-primary-dark"
                                }` }
                        >
                            { item.name }
                        </Link>
                    );
                }) }
            </nav>

            <Button
                onClick={ handleLogout }
                className="absolute bottom-5 left-5 right-5"
            >
                Logout
            </Button>
        </aside>
    );
}