import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children, getCoins, data, getPrices, coinPrices }) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [confirmFavorites, setConfirmFavorites] = useState(false);
  const [coinList, setcoinList] = useState({});
  const [filteredCoins, setfilteredCoins] = useState([]);
  const [currentFavorite, setcurrentFavorite] = useState("");

  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  const savedSettings = () => {
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    } else {
      setFavorites(cryptoDashData.favorites);
      setcurrentFavorite(cryptoDashData.currentFavorite);
      if (favorites.length > 0) {
        getPrices(favorites.toString());
      } else {
        getPrices(cryptoDashData.favorites.toString());
      }
    }
  };

  const confirmFav = () => {
    setcurrentFavorite(favorites[0]);

    setFirstVisit(false);
    setPage("dashboard");
    getPrices(favorites.toString());
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: favorites,
        currentFavorite: currentFavorite,
      })
    );
    /* localStorage.setItem("currentFavorite", JSON.stringify(currentFavorite)); */
  };

  const handlerCurrentFavorite = (sym) => {
    setcurrentFavorite(sym);

    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym,
      })
    );
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
      confirmFav();
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
    currentFavorite,
    handlerCurrentFavorite,
  ];

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
