import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;

    // // Handle 401 Unauthorized errors
    // if (error.response?.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     // Implement your refresh token logic here
    //     const refreshToken = localStorage.getItem("refreshToken");
    //     // Call refresh token endpoint and get new access token
    //     // Update localStorage with new tokens

    //     // Retry the original request
    //     return axiosInstance(originalRequest);
    //   } catch (refreshError) {
    //     // Handle refresh token failure (e.g., logout user)
    //     localStorage.removeItem("accessToken");
    //     localStorage.removeItem("refreshToken");
    //     window.location.href = "/login";
    //     return Promise.reject(refreshError);
    //   }
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;
