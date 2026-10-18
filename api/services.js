export async function getServices() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/services.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    // throw new Error("Failed to fetch services");
    return [];
  }

  return res.json();
}

export async function getService(requestTitle) {
  requestTitle = encodeURIComponent(requestTitle); // Encode the requestTitle to handle special characters
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/services.php?requestTitle=${requestTitle}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    return false;
    // throw new Error("Failed to fetch service");
  }
  // const s = await res.text();console.log(s);

  return res.json();
}


