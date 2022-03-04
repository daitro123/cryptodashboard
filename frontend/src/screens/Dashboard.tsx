import { Container } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OverviewScreen from "./OverviewScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CryptoScreen from "./CryptoScreen";
import PortfolioScreen from "./PortfolioScreen";

const Dashboard = () => {
    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <>
            <BrowserRouter>
                <Navbar openSidebar={openSidebar} />
                <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
                <MainContainer openSidebar={openSidebar}>
                    <Container>
                        <Routes>
                            <Route path="/overview" element={<OverviewScreen />} />
                            <Route path="/crypto" element={<CryptoScreen />} />
                            <Route path="/portfolio" element={<PortfolioScreen />} />
                        </Routes>
                    </Container>
                </MainContainer>
            </BrowserRouter>
        </>
    );
};

export default Dashboard;

interface MainContainerProps {
    openSidebar: boolean;
}

const MainContainer = styled.main<MainContainerProps>`
    margin-left: ${(props) => (props.openSidebar ? "240px" : "50px")};
    padding-top: 120px;
    transition: all 0.3s ease-in;
    min-height: 70vh;
    display: grid;
    place-items: center;
`;
