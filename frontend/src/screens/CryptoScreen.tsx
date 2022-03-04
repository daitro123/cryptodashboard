import React from "react";
import CryptoTableMC from "../components/CryptoTableMC";
import Loading from "../components/Loading";
import { useQuery } from "react-query";
import { useGlobalContext } from "../GlobalState";
import ErrorModal from "../components/ErrorModal";

const fetchList = async () => {
    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    );
    return res.json();
};

const CryptoScreen = () => {
    const { isLoading, isError, data, error } = useQuery<any, Error>("topCurrencies", fetchList);

    if (isLoading) return <Loading />;

    if (isError) return <ErrorModal message={error!.message} />;

    return <CryptoTableMC rows={data} />;
};

export default CryptoScreen;
