import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

const ResetPassword = () => {
  const { token } = useParams(); // Extract token from URL
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/reset-password/${token}`,
        { password }
      );
      setMessage(response.data.message); // Show success message
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred"); // Show error message
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <Typography variant="h5" className="mb-4 text-center text-gray-800">
          Reset Password
        </Typography>
        <TextField
          label="New Password"
          variant="outlined"
          fullWidth
          className="mb-4"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className="mb-4"
        >
          Reset Password
        </Button>
        {message && (
          <Typography variant="body2" className="text-center text-green-600">
            {message}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" className="text-center text-red-600">
            {error}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default ResetPassword;
