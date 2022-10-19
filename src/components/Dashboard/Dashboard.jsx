import React from "react";
import { AdminNavbar } from "../Navbar/Navbar";
import Panel from "../Panel/Panel";
import Sidebar from "../Sidebar/Sidebar";
import { Dashboard__Section } from "./DashboardStyles";

const Dashboard = ({ children }) => {
  const headerSize = "100px";
  const sidebarSize = "300px";
  return (
    <>
      <AdminNavbar headerSize={headerSize} />
      <Dashboard__Section headerMargin={headerSize}>
        <Sidebar sidebarSize={sidebarSize}/>
      </Dashboard__Section>
      //PANEL VIEW
      {children}
    </>
  );
};

export default Dashboard;
