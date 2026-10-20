export async function getEvents(fbToken = null) {
  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/events.php", {
    cache: "default",
    headers,
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    // throw new Error("Failed to fetch events");
    return [];
  }

  return res.json();
}

export async function getEvent(requestTitle) {
  requestTitle = encodeURIComponent(requestTitle); // Encode the requestTitle to handle special characters
  // console.log(requestTitle);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/events.php?requestTitle=${requestTitle}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    // throw new Error("Failed to fetch event");
    return false;
  }

  return res.json();
}
