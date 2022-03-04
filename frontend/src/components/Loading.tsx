import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loading;
