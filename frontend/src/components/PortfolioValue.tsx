import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import {
    LineChart,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Line,
    AreaChart,
    Area,
} from "recharts";
import styled from "styled-components";
import theme from "../theme";

const PortfolioValue = () => {
    const [timeScale, setTimeScale] = useState("1w");

    return (
        <Container>
            <PortfolioValueHeader>
                <div>
                    <Typography variant="h5" sx={{ marginBottom: "5px", fontWeight: "700" }}>
                        Welcome!
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "15px" }}>
                        Portfolio Value
                    </Typography>
                    <Typography variant="h3" sx={{ marginBottom: "40px", fontWeight: "700" }}>
                        $770.56
                    </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Button variant="contained" sx={{ marginRight: 0.5 }}>
                        1W
                    </Button>
                    <Button variant="contained" sx={{ marginRight: 0.5 }}>
                        1M
                    </Button>
                    <Button variant="contained" sx={{ marginRight: 0.5 }}>
                        3M
                    </Button>
                    <Button variant="contained" sx={{ marginRight: 0.5 }}>
                        6M
                    </Button>
                    <Button variant="contained">YTD</Button>
                </div>
            </PortfolioValueHeader>

            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor={theme.palette.secondary.main}
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor={theme.palette.secondary.main}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="name"
                        stroke={theme.palette.primary.main}
                        color={theme.palette.primary.main}
                        fontSize={"12px"}
                        axisLine={false}
                        tickLine={false}
                        interval={"preserveStartEnd"}
                    />
                    <CartesianGrid strokeDasharray="1 10" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke={theme.palette.secondary.main}
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default PortfolioValue;

const Container = styled.div`
    width: 100%;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.15);
`;

const PortfolioValueHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
