export async function getEvents() {
  const res = await fetch("http://localhost/paradigm/backend/paradigm-portfolio-backend/query/events.php", {
    cache: "default", // or use revalidate if needed
  });

  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch events");
  }

  return res.json();
}

export async function getEvent(name) {
  name = encodeURIComponent(name); // Encode the name to handle special characters
  console.log(name);
  const res = await fetch(`http://localhost/paradigm/backend/paradigm-portfolio-backend/query/events.php?name=${name}`, {
    cache: "default", // or use revalidate if needed
  });
  
  if (!res.ok) {
    // 🔥 THIS triggers error.js automatically
    throw new Error("Failed to fetch event");
  }

  return res.json();
}