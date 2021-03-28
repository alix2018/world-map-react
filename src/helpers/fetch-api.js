/* TO FIX
import '../config';
const {baseUrl} = config; // eslint-disable-line no-undef
*/

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://worldmappie.stephaniealix.com/api' : 'http://localhost:3000';

function errorHandler(res) {
  if (!res.ok) {
    const errorObj = new Error();
    errorObj.status = res.status;
    errorObj.code = res.statusText;
    throw errorObj;
  }

  return res;
}

export const get = (urlPath, config = {}) => {
  const url = `${baseUrl}${urlPath}`;

  return fetch(url, {
    ...config,
    method: 'GET'
  });
};

export const post = (urlPath, body, config = {headers: {}}) => {
  const url = `${baseUrl}${urlPath}`;

  return fetch(url, {
    ...config,
    method: 'POST',
    headers: {
      ...config.headers
    },
    body: JSON.stringify(body)
  });
};

export const postJson = (urlPath, body, config = {headers: {}}) => {
  const url = `${baseUrl}${urlPath}`;

  return fetch(url, {
    ...config,
    method: 'POST',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(errorHandler)
    .then(res => res.json());
};