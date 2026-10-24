const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function forwardToBackend(endpoint, init) {
  if (!API_URL) {
    return Response.json({ error: "Backend API URL is not configured" }, { status: 500 });
  }

  try {
    const baseUrl = API_URL.replace(/\/$/, "");
    const upstream = await fetch(`${baseUrl}/${endpoint}`, {
      ...init,
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...(init.method?.toUpperCase() !== "GET" ? { "ngrok-skip-browser-warning": "true" } : {}),
      },
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
      },
    });
  } catch (error) {
    console.error("Contact backend request failed:", error);
    return Response.json({ error: "Unable to reach the backend" }, { status: 502 });
  }
}

export async function GET() {
  return forwardToBackend("services.php", { method: "GET" });
}

export async function POST(request) {
  return forwardToBackend("contactUs.php", {
    method: "POST",
    body: await request.text(),
  });
}
