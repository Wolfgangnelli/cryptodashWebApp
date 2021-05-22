import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children, getCoins, data, getPrices, coinPrices }) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [confirmFavorites, setConfirmFavorites] = useState(false);
  const [coinList, setcoinList] = useState({});
  const [filteredCoins, setfilteredCoins] = useState([]);

  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  const savedSettings = () => {
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    } else {
      setFavorites(cryptoDashData);
      if (favorites.length > 0) {
        getPrices(favorites.toString());
      } else {
        getPrices(cryptoDashData.toString());
      }
    }
  };

  useEffect(() => {
    getCoins();
    savedSettings();
  }, []);

  useEffect(() => {
    if (data || Object.keys(coinList).length === 0) {
      setcoinList(data);
    }
  }, [data]);

  useEffect(() => {
    if (favorites.length > 0) {
      setFirstVisit(false);
      setPage("dashboard");
      getPrices(favorites.toString());
      localStorage.setItem("cryptoDash", JSON.stringify(favorites));
    }
  }, [confirmFavorites]);

  let values = [
    coinList,
    page,
    setPage,
    firstVisit,
    confirmFavorites,
    setConfirmFavorites,
    favorites,
    setFavorites,
    setfilteredCoins,
    filteredCoins,
    coinPrices,
  ];

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
