import {
    Divider,
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton as MuiIconButton,
    Avatar,
    Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styled from "styled-components";
import { ChevronLeft } from "@mui/icons-material";
import theme from "../theme";
import { Link } from "react-router-dom";

interface SidebarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IconButtonProp {
    open: boolean;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
    return (
        <Drawer variant="permanent" open={open} anchor="left">
            <DrawerHeader>
                <IconButton open={open} onClick={() => setOpen(!open)}>
                    <ChevronLeft />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <AvatarContainer>
                <Avatar sx={{ marginBottom: 1 }} />
                {open && (
                    <Typography component={"p"} variant={"h6"}>
                        UserName
                    </Typography>
                )}
            </AvatarContainer>
            <Divider />
            <List>
                <ListItem button component={Link} to="/overview">
                    <ListItemIcon>
                        <DashboardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText>Overview</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/crypto">
                    <ListItemIcon>
                        <DashboardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText>Crypto</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/portfolio">
                    <ListItemIcon>
                        <DashboardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText>Portfolio</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;

const IconButton = styled(MuiIconButton)<IconButtonProp>`
    transform: ${(props) => (!props.open ? "rotate(180deg)" : "rotate(0)")};
`;

const Drawer = styled(MuiDrawer)`
    & .MuiDrawer-paper {
        width: ${(props) => (!props.open ? "50px" : "240px")};
        overflow-x: hidden;
        transition: all 0.3s ease-in;
        background: linear-gradient(
            to bottom,
            ${theme.palette.primary.main},
            ${theme.palette.primary.dark}
        );
    }
`;

const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-height: 64px;
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 5px;
`;
