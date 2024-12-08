import React, { useState } from "react";
import { sendResetLink } from "../api/auth";
import { TextField, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await sendResetLink(email);
      setMessage(data.message); // Success message
    } catch (error) {
      setMessage("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Back Arrow */}
        <div className="flex items-center mb-4">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className="ml-2">
            Forgot Password
          </Typography>
        </div>

        {/* Forgot Password Form */}
        <form onSubmit={handleForgotPassword}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Send Reset Link
          </Button>
        </form>

        {/* Message */}
        <Typography
          className={`mt-4 text-sm ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default ForgotPassword;
