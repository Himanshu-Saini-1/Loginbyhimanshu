import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex items-center bg-gray-100 shadow-sm">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <h1 className="ml-4 text-lg font-bold">App Title</h1>
    </div>
  );
};

export default Header;
