export function getVisitorId() {
    const cookieName = "visitor_id";

    // Check if cookie already exists
    const cookies = document.cookie.split("; ");

    const existingCookie = cookies.find((cookie) =>
        cookie.startsWith(`${cookieName}=`)
    );

    if (existingCookie) {
        return existingCookie.split("=")[1];
    }

    // Generate a unique ID
    const visitorId = crypto.randomUUID();

    // Save cookie for 1 day
    document.cookie = `${cookieName}=${visitorId}; Max-Age=${60 * 60 * 24}; Path=/; SameSite=Lax`;

    return visitorId;
}

