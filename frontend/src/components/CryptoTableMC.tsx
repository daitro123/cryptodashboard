import {
    Paper,
    TableContainer,
    TableHead,
    Table,
    TableCell,
    TableBody,
    TableRow,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { formatter } from "../utils/utils";

interface CryptoTableMCProps {
    rows: {
        name: string;
        symbol: string;
        image: string;
        current_price: number;
        circulating_supply: number;
        market_cap: number;
        market_cap_rank: number;
        price_change_percentage_24h: number;
    }[];
}

const CryptoTableMC = ({ rows }: CryptoTableMCProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">24h %</TableCell>
                        <TableCell align="right">Market Cap</TableCell>
                        <TableCell align="right">Circulating Supply</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.market_cap_rank}
                            </TableCell>
                            <TableCell sx={{ display: "flex", alignItems: "center" }}>
                                <CryptoIcon src={row.image} alt="icon" /> {row.name}{" "}
                                {row.symbol.toUpperCase()}
                            </TableCell>
                            <TableCell align="right">
                                {formatter.format(row.current_price)}
                            </TableCell>
                            <TableCell align="right">{row.price_change_percentage_24h}</TableCell>
                            <TableCell align="right">{formatter.format(row.market_cap)}</TableCell>
                            <TableCell align="right">
                                {row.circulating_supply} {row.symbol.toUpperCase()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CryptoTableMC;

const CryptoIcon = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 10px;
`;
