export async function getBlogs() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/blog.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    // throw new Error("Failed to fetch events");
    return [];
  }

  return res.json();
}

export async function getBlog(requestTitle) {
  requestTitle = encodeURIComponent(requestTitle); // Encode the requestTitle to handle special characters
  // console.log(requestTitle);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/blog.php?requestTitle=${requestTitle}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    // throw new Error("Failed to fetch event");
    return false;
  }

  return res.json();
}