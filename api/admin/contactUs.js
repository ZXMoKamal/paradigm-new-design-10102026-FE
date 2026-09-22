"use client";

import { auth } from "@/configs/firebase";

//-   // export async function getContacts({
    //     search = "",
    //     filterBy = "",
    //     groupBy = "",
    // } = {}) {

    //     const user = auth.currentUser;

    //     if (!user) {
    //         throw new Error("User is not authenticated");
    //     }

    //     // Get Firebase ID token
    //     const token = await user.getIdToken();

    //     const params = new URLSearchParams();

    //     if (search) {
    //         params.append("search", search);
    //     }

    //     if (filterBy) {
    //         params.append("filterBy", filterBy);
    //     }

    //     if (groupBy) {
    //         params.append("groupBy", groupBy);
    //     }

    //     const queryString = params.toString();

    //     const response = await fetch(
    //         `${process.env.NEXT_PUBLIC_API_URL}/admin/getContactUs.php${
    //             queryString ? `?${queryString}` : ""
    //         }`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 Accept: "application/json",
    //             },
    //             cache: "no-store",
    //         }
    //     );

    //     const data = await response.json();

    //     if (!response.ok) {
    //         throw new Error(
    //             data.error || "Failed to get contacts"
    //         );
    //     }

    //     return data;
    // }
//-

export async function getContacts({
    search = "",
    filterBy = "",
    groupBy = "",
    page = 1,
    limit = 10,
} = {}) {

    const user = auth.currentUser;

    if (!user) {
        throw new Error("User is not authenticated");
    }

    // Get Firebase ID token
    const token = await user.getIdToken();

    const params = new URLSearchParams();

    if (search) {
        params.append("search", search);
    }

    if (filterBy) {
        params.append("filterBy", filterBy);
    }

    if (groupBy) {
        params.append("groupBy", groupBy);
    }

    // ---------------------------------------------------------
    // Pagination
    // ---------------------------------------------------------

    params.append("page", page);
    params.append("limit", limit);

    const queryString = params.toString();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/getContactUs.php${
            queryString ? `?${queryString}` : ""
        }`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
            cache: "no-store",
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || "Failed to get contacts"
        );
    }

    return data;
}
