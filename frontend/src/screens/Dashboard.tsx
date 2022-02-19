import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <>
            <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
        </>
    );
};

export default Dashboard;
