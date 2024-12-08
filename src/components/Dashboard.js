import React from "react";
import { Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Dashboard = () => {
  const icons = [
    {
      name: "Home",
      icon: <HomeIcon fontSize="large" />,
      action: () => alert("Home clicked!"),
    },
    {
      name: "Settings",
      icon: <SettingsIcon fontSize="large" />,
      action: () => alert("Settings clicked!"),
    },
    {
      name: "Security",
      icon: <SecurityIcon fontSize="large" />,
      action: () => alert("Security clicked!"),
    },
    {
      name: "Code",
      icon: <CodeIcon fontSize="large" />,
      action: () => alert("Code clicked!"),
    },
    {
      name: "Bug Report",
      icon: <BugReportIcon fontSize="large" />,
      action: () => alert("Bug Report clicked!"),
    },
    {
      name: "Support",
      icon: <ContactSupportIcon fontSize="large" />,
      action: () => alert("Support clicked!"),
    },
  ];

  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Typography variant="h4" className="text-gray-800 mb-8 font-bold">
        Welcome to the Dashboard
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={item.action}
          >
            <IconButton>{item.icon}</IconButton>
            <Typography variant="subtitle1" className="text-gray-700 mt-2">
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
