import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [confirmFavorites, setConfirmFavorites] = useState(null);

  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  useEffect(() => {
    //getCoins();
  }, []);

  useEffect(() => {
    if (!cryptoDashData) {
      setPage("settings");
      setFirstVisit(true);
    }
  }, [cryptoDashData]);

  useEffect(() => {
    if (confirmFavorites) {
      setFirstVisit(false);
      setPage("dashboard");
      localStorage.setItem(
        "cryptoDash",
        JSON.stringify({ test: confirmFavorites })
      );
    }
  }, [confirmFavorites]);

  let values = [page, setPage, firstVisit, setConfirmFavorites];

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
