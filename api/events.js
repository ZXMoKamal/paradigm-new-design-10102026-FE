export async function getEvents(fbToken = null) {
  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/events.php",
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

export async function getEvent(requestTitle, fbToken = null, visitorId = null) {
  requestTitle = encodeURIComponent(requestTitle);

  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/events.php?requestTitle=${requestTitle}${visitorId ? `&visitorId=${visitorId}` : ''}`,
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