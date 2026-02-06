const BASE_URL = "https://tinytales.trendline.marketing/api";

export const apiRequest = async (url, method = "GET", body, token) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body,
  });

  return res.json();
};
