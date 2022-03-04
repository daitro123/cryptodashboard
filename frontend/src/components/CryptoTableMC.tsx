import {
    Paper,
    TableContainer,
    TableHead,
    Table,
    TableCell,
    TableBody,
    TableRow,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
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
                        <TableHeaderRow>#</TableHeaderRow>
                        <TableHeaderRow>Name</TableHeaderRow>
                        <TableHeaderRow align="right">Price</TableHeaderRow>
                        <TableHeaderRow align="right">24h %</TableHeaderRow>
                        <TableHeaderRow align="right">Market Cap</TableHeaderRow>
                        <TableHeaderRow align="right">Circulating Supply</TableHeaderRow>
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
                            <TableCell
                                align="right"
                                sx={
                                    row.price_change_percentage_24h > 0
                                        ? { color: green[500] }
                                        : { color: red[500] }
                                }
                            >
                                {Math.round(row.price_change_percentage_24h * 100) / 100} %
                            </TableCell>
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

const TableHeaderRow = styled(TableCell)`
    font-weight: 700;
`;
