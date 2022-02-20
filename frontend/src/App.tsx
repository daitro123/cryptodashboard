import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import theme from "./theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Dashboard />
            </ThemeProvider>
        </div>
    );
}

export default App;
