import React, { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(email, password);
      setMessage("Registration successful!");
      setShowConfetti(true);
      setTimeout(() => navigate("/login"), 3000); // Redirect to Login
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-4">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" className="ml-2">
            Sign Up
          </Typography>
        </div>
        <form onSubmit={handleRegister}>
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
            Sign Up
          </Button>
        </form>
        <Typography className="mt-4 text-sm text-gray-500">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default Register;
