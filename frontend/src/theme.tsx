import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#101b3d",
        },
        secondary: {
            main: "#A8EB12",
            contrastText: "#101b3d",
        },
        background: {
            default: "#5c5c5a",
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: "Roboto Mono",
    },
});

export default theme;
