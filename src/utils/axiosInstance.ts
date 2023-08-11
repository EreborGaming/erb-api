import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.multiversex.io', // This is a hypothetical base URL. Replace it with the actual API endpoint if available.
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers if necessary
  },
});

export default axiosInstance;
