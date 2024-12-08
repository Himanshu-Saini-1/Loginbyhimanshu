import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      setMessage("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      if (
        error.includes("Invalid password") ||
        error.includes("User not found")
      ) {
        setMessage("Login failed. Please check your credentials.");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" className="ml-2">
            Login
          </Typography>
        </div>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            className="mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <Typography variant="body2" className="text-gray-600">
            <span>Forgot your password? </span>
            <Button
              color="primary"
              onClick={() => navigate("/forgot-password")}
            >
              Click here
            </Button>
          </Typography>
        </div>

        <Typography className="mt-4 text-sm text-gray-500">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default Login;
