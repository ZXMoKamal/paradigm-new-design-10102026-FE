export async function getServices() {
  const res = await fetch("http://localhost/paradigm/backend/paradigm-portfolio-backend/query/services.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    return [];
    // throw new Error("Failed to fetch services");
  }

  return res.json();
}

export async function getService(requestTitle) {
  requestTitle = encodeURIComponent(requestTitle); // Encode the requestTitle to handle special characters
  console.log(requestTitle);
  const res = await fetch(`http://localhost/paradigm/backend/paradigm-portfolio-backend/query/services.php?requestTitle=${requestTitle}`, {
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


