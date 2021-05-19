import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [favorites, setFavorites] = useState(["BTC", "ETH", "XMR", "DOGE"]);
  const [confirmFavorites, setConfirmFavorites] = useState(null);

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
    savedSettings();
  }, []);

  useEffect(() => {
    if (confirmFavorites) {
      setFirstVisit(false);
      setPage("dashboard");
      localStorage.setItem(
        "cryptoDash",
        JSON.stringify({ favorites: favorites })
      );
      setConfirmFavorites(!confirmFavorites);
    }
  }, [confirmFavorites]);

  let values = [
    page,
    setPage,
    firstVisit,
    setConfirmFavorites,
    favorites,
    setFavorites,
  ];

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
