"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";
import Button from "../shared/button";
import Chart from "../icons/chart";
import Table from "../icons/table";
import Calendar from "../icons/calendar";
import Newspaper from "../icons/newspaper";
import Msg from "../icons/msg";
import HandShake from "../icons/handshake";
import UserTie from "../icons/userTie";
import Gear from "../icons/gear";
import { useAdminAuth } from "@/context/adminACLProvider";
import Pencil from "../icons/pencil";
import Loading from "@/app/loading";

const data = [
    // {
    //     name: "Dashboard",
    //     href: "/admin/dashboard",
    // },
    {
        name: "Events",
        module: "Events",
        href: "/admin/dashboard/events",
        icon: <Calendar className={"w-6 h-6 fill-secondary"}/>
    },
    {
        name: "Blog",
        module: "Blog",
        href: "/admin/dashboard/blog",
        icon: <Newspaper className={"w-6 h-6 fill-secondary"}/>
    },
    {
        name: "Services",
        module: "Services",
        href: "/admin/dashboard/services",
        icon: <HandShake className={"w-6 h-6 fill-secondary"}/>
    },
    {
        name: "Contacts",
        module: "Contacts",
        href: "/admin/dashboard/contacts",
        icon: <Msg className={"w-6 h-6 fill-secondary"}/>
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
const admin = [
    {
        name: "admins",
        module: "ManageAdmins",
        href: "/admin/dashboard/admins",
        icon:<UserTie className={"w-6 h-6 fill-secondary"}/>
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

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

    async function handleLogout() {
        try {
            await signOut(auth);

            router.replace("/admin/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <aside className="sticky top-0 h-screen w-64 shrink-0 flex flex-col  text-text-primary bg-primary-dark pt-30">
            <div className="mb-3">
                <h1 className="text-xl font-bold text-text-primary text-center">
                    {localStorage.getItem("adminName")}
                </h1>

                <p className="text-sm text-secondary text-center">
                    Admin Dashboard
                </p>
            </div>

            {loading && <span className="m-auto">loading...</span>}

            <nav className="space-y-2 flex-1 h-[80%] overflow-y-auto py-5">
                { hasAccess("Dashboard", "view") && <Link
                    href={ "/admin/dashboard" }
                    className={ `flex gap-4 items-center px-4 py-3 transition "text-text-primary hover:bg-secondary hover:text-primary-dark` }
                >
                    <Chart className={"w-6 h-6 fill-secondary"}/>
                    { "Dashboard" }
                </Link>}
                <hr className="m-0"/>
                <div className="flex gap-4 items-center px-4 py-2 text-lg tracking-widest font-semibold text-primary-dark bg-secondary">
                    <Table className={"w-6 h-6"}/>
                    <span>Data</span>
                </div>
                { data  .filter((item) =>
        hasAccess(item.module, "view")
    ).map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            className={ `flex items-center gap-4 px-4 py-3 transition ${active
                                    ? "bg-white text-black"
                                : "text-text-primary hover:bg-secondary/80 hover:text-primary-dark "
                                }` }
                        >
                            {item.icon}
                            { item.name }
                        </Link>
                    );
                }) }
                <hr className="m-0"/>
                <div className="flex items-center gap-4 px-4 py-2 text-lg tracking-widest font-semibold text-primary-dark bg-secondary">
                    <Pencil className={"w-6 h-6"}/>
                    <span>Edit Pages</span>
                </div>
                {  hasAccess("EditPages", "view") && pages.map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            className={ `block px-4 py-3 transition ${active
                                    ? "bg-white text-black"
                                : "text-text-primary hover:bg-secondary/80 hover:text-primary-dark"
                                }` }
                        >
                            { item.name }
                        </Link>
                    );
                }) }
                <hr className="m-0"/>
                <div className="flex items-center gap-4 px-4 py-2 text-lg tracking-widest font-semibold text-primary-dark bg-secondary">
                    <Gear className={"w-6 h-6"}/>
                    <span>Manage</span>
                </div>
                { admin.filter((item) =>
        hasAccess(item.module, "view")
    ).map((item) => {
                    const active =
                        pathname === item.href;

                    return (
                        <Link
                            key={ item.href }
                            href={ item.href }
                            className={ `flex items-center gap-4 px-4 py-3 transition ${active
                                    ? "bg-white text-black"
                                : "text-text-primary hover:bg-secondary/80 hover:text-primary-dark"
                                }` }
                        >
                            {item.icon}
                            { item.name }
                        </Link>
                    );
                }) }
            </nav>

            <Button
                onClick={ handleLogout }
                className="m-4"
            >
                Logout
            </Button>
        </aside>
    );
}