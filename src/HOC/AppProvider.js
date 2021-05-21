import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children, getCoins, data }) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [favorites, setFavorites] = useState(["BTC", "ETH", "XMR", "DOGE"]);
  const [confirmFavorites, setConfirmFavorites] = useState(null);
  const [coinList, setcoinList] = useState({});
  const [filteredCoins, setfilteredCoins] = useState([]);

  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  const savedSettings = () => {
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    } else {
      setFavorites(cryptoDashData);
    }
  };

  useEffect(() => {
    getCoins();
    savedSettings();
    if (data) {
      setcoinList(data);
    }
  }, []);

  useEffect(() => {
    if (confirmFavorites) {
      setFirstVisit(false);
      setPage("dashboard");
      localStorage.setItem("cryptoDash", JSON.stringify(favorites));
      setConfirmFavorites(!confirmFavorites);
    }
  }, [confirmFavorites]);

  /*   const setFilterCoins = (filteredCoins) => {
    setfilteredCoins(filteredCoins);
  }; */

  let values = [
    coinList,
    page,
    setPage,
    firstVisit,
    setConfirmFavorites,
    favorites,
    setFavorites,
    setfilteredCoins,
    filteredCoins,
  ];

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
