import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Our App
      </motion.h1>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link to="/login">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Welcome;
