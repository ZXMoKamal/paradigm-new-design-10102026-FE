import { cookies } from "next/headers";

export async function getVisitorIdServer() {
    const cookieStore = await cookies();

    return cookieStore.get("visitor_id")?.value || null;
}