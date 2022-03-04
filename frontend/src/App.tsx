import { ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import "./App.css";
import { GlobalContextProvider } from "./GlobalState";
import Dashboard from "./screens/Dashboard";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContextProvider>
                <div
                    className="App"
                    style={{
                        minHeight: "100vh",
                        top: 0,
                        backgroundColor: grey[300],
                        paddingBottom: "40px",
                    }}
                >
                    <ThemeProvider theme={theme}>
                        <Dashboard />
                    </ThemeProvider>
                </div>
            </GlobalContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
