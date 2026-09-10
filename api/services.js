export async function getServices(fbToken = null) {
  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/services.php",
    {
      cache: "default",
      headers,
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export async function getService(requestTitle, fbToken = null) {
  requestTitle = encodeURIComponent(requestTitle);

  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/services.php?requestTitle=${requestTitle}`,
    {
      cache: "default",
      headers,
    }
  );

  if (!res.ok) {
    return false;
  }

  return res.json();
}


