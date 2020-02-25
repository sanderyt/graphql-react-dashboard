import React, { useContext } from "react";

import { AuthContext } from "../context/auth";
import Box from "../components/Box";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Box>
        <h1>Welcome, {user.username}</h1>
      </Box>
    </div>
  );
};

export default Dashboard;
