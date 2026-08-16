export async function getServices() {
  const res = await fetch(process.env.API_URL+"/services.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch services");
  }

  return res.json();
}

export async function getService(requestTitle) {
  requestTitle = encodeURIComponent(requestTitle); // Encode the requestTitle to handle special characters
  console.log(requestTitle);
  const res = await fetch(process.env.API_URL+`/services.php?requestTitle=${requestTitle}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch service");
  }
  // const s = await res.text();console.log(s);

  return res.json();
}


