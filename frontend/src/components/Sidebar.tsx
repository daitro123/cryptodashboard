import {
    Divider,
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Avatar,
    Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styled from "styled-components";
import { ChevronLeft } from "@mui/icons-material";

interface SidebarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={() => setOpen(!open)}>
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
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Overview</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Overview</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Overview</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Overview</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;

const Drawer = styled(MuiDrawer)`
    & .MuiDrawer-paper {
        width: ${(props) => (!props.open ? "45px" : "220px")};
        overflow-x: hidden;
        transition: all 0.3s ease-in;
    }
`;

const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 5px;
`;
