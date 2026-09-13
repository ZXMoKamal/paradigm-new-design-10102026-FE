export async function getBlogs(fbToken = null) {
  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/blog.php",
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

export async function getBlog(requestTitle, fbToken = null, visitorId = null) {
  requestTitle = encodeURIComponent(requestTitle);

  const headers = {};

  if (fbToken) {
    headers.Authorization = `Bearer ${fbToken}`;
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/blog.php?requestTitle=${requestTitle}${visitorId ? `&visitorId=${visitorId}` : ''}`,
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