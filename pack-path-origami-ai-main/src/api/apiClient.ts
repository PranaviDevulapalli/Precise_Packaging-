
import axios from 'axios';

// Create a base API client with default configuration
const apiClient = axios.create({
  // Replace with your actual API base URL
  baseURL: process.env.REACT_APP_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens, etc.
apiClient.interceptors.request.use((config) => {
  // You can add auth tokens here
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

export default apiClient;
