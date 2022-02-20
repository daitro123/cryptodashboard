import { MenuOpen } from "@mui/icons-material";
import { AppBar as MuiAppBar, IconButton, TextField, InputBase, Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../theme";

interface NavbarProps {
    openSidebar: boolean;
}

interface AppBarProp {
    openSidebar: boolean;
    theme: any;
}

const Navbar = ({ openSidebar }: NavbarProps) => {
    return (
        <AppBar openSidebar={openSidebar} theme={theme}>
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" />
                </Search>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

const AppBar = styled(MuiAppBar)(
    ({ theme, openSidebar }: AppBarProp) => `
    width: ${!openSidebar ? "calc(100% - 50px)" : "calc(100% - 240px)"};
    transition: all 0.3s ease-in;
    background: ${theme.palette.primary.main}
`
);

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
