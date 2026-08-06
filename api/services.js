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

export async function getService(id) {
  const res = await fetch(`http://localhost/paradigm/backend/paradigm-portfolio-backend/query/services.php?id=${id}`, {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch service");
  }

  return res.json();
}


