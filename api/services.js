export async function getServices() {
  const res = await fetch("http://localhost/paradigm/backend/paradigm-portfolio-backend/query/services.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch services");
  }

  return res.json();
}

export async function getService(title) {
  title = encodeURIComponent(title); // Encode the title to handle special characters
  console.log(title);
  const res = await fetch(`http://localhost/paradigm/backend/paradigm-portfolio-backend/query/services.php?title=${title}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch service");
  }

  return res.json();
}


