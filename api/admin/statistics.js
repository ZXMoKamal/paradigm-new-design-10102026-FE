export async function getDataStatistics(duration, fbToken = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/admin/dataStatistics.php",
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        duration: duration,
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return false;
  }

  return res.json();
}