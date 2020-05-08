const baseUrl = 'http://localhost:3000';

export const get = (urlPath, config = {}) => {
  const finalUrl = new URL(urlPath, baseUrl);
  const stringUrl = finalUrl.toString();

  return fetch(stringUrl, {
    ...config,
    method: 'GET'
  });
};

export const post = (urlPath, body, config = {headers: {}}) => {
  const finalUrl = new URL(urlPath, baseUrl);
  const stringUrl = finalUrl.toString();

  return fetch(stringUrl, {
    ...config,
    method: 'POST',
    headers: {
      ...config.headers
    },
    body: JSON.stringify(body)
  });
};

export const postJson = (urlPath, body, config = {headers: {}}) => {
  const finalUrl = new URL(urlPath, baseUrl);
  const stringUrl = finalUrl.toString();

  return fetch(stringUrl, {
    ...config,
    method: 'POST',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(error => {
      console.warn(error);
    });
};