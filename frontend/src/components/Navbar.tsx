import { MenuOpen } from "@mui/icons-material";
import { AppBar, IconButton } from "@mui/material";
import React from "react";

interface NavbarProps {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ openSidebar, setOpenSidebar }: NavbarProps) => {
    return (
        <AppBar>
            <IconButton>
                <MenuOpen onClick={() => setOpenSidebar(!openSidebar)} />
            </IconButton>
        </AppBar>
    );
};

export default Navbar;
