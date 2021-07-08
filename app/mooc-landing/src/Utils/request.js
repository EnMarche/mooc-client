import axios from 'axios';

export const callApi = (endpoint, method = 'get', data) => {
  const headers =
    method === 'get'
      ? {}
      : {
          'Content-Type': 'application/json'
        };

  headers['Accept'] = 'application/json';
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_HOST
      : process.env.REACT_APP_API_DEV_HOST;

  return axios({
    url: `${apiUrl}${endpoint}`,
    headers,
    method,
    withCredentials: true,
    data
  }).then((r) => r.data);
};
