"use client";

import { auth } from "@/configs/firebase";

export async function getContacts() {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("User is not authenticated");
    }

    // Get Firebase ID token
    const token = await user.getIdToken();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/getContactUs.php`,
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
        throw new Error(data.error || "Failed to get contacts");
    }

    return data;
}