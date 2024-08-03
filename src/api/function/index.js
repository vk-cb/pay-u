import axios from 'axios';
const baseUrl = "http://localhost:8000/v1/"
const api = axios.create({
  baseURL:baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const makeApiRequest = async (method, url, data = null, additionalHeaders = {}) => {
  
  try {
    const response = await api.request({
      method,
      url,
      data,
      headers: {
        ...api.defaults.headers,
        ...additionalHeaders,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error
  }
};