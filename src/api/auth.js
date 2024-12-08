import axios from "axios";

// Set the base API URL from environment variables
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

// User registration
export const registerUser = async (email, password) => {
  try {
    console.log("Sending request:", { email, password }); // Log request
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    console.log("Response received:", response.data); // Log response
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error.response?.data || error.message); // Log error
    throw error.response?.data?.message || "Registration failed";
  }
};

// User login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Return token or success message
  } catch (error) {
    // Handle errors and return error messages
    throw error.response?.data?.message || "Login failed";
  }
};

// Send password reset link
export const sendResetLink = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data; // Return success message
  } catch (error) {
    // Handle errors and return error messages
    throw error.response?.data?.message || "Failed to send reset link";
  }
};

// Reset password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, {
      password: newPassword,
    });
    return response.data; // Return success message
  } catch (error) {
    // Handle errors and return error messages
    throw error.response?.data?.message || "Failed to reset password";
  }
};
