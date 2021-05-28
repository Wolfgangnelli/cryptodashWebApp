import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { API_HISTORICAL_DATA } from "../Config/index";

const AppContext = React.createContext();
const TIME_UNITS = 10;

const AppProvider = ({
  children,
  getCoins,
  data,
  getPrices,
  coinPrices,
  getHistorical,
  historicalData,
  deleteHistorical,
}) => {
  const [page, setPage] = useState("dashboard");
  const [firstVisit, setFirstVisit] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [confirmFavorites, setConfirmFavorites] = useState(false);
  const [coinList, setcoinList] = useState(data);
  const [filteredCoins, setfilteredCoins] = useState([]);
  const [currentFavorite, setcurrentFavorite] = useState("");
  const [historicalUSD, sethistoricalUSD] = useState([
    {
      name: "",
      data: [],
    },
  ]);
  const [historicalEUR, sethistoricalEUR] = useState([
    {
      name: "",
      data: [],
    },
  ]);
  const [timeIntervalUSD, settimeIntervalUSD] = useState("months");
  const [timeIntervalEUR, settimeIntervalEUR] = useState("months");

  let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

  const promiseLoad = (fsym, tsyms, time) => {
    return axios
      .get(`${API_HISTORICAL_DATA}fsym=${fsym}&tsyms=${tsyms}&ts=${+time}`)
      .then((res) => {
        return res;
      });
  };

  const loadHistorical = (sym) => {
    let promises = [];
    let time_ = timeIntervalUSD || timeIntervalEUR;

    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        promiseLoad(
          sym,
          ["USD", "EUR"],
          moment()
            .subtract({ [time_]: units })
            .toDate()
        )
      );
    }
    if (historicalData.length > 0) {
      deleteHistorical();
    }
    Promise.all(promises).then((res) => {
      getHistorical(res);
    });
  };

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
    /*  loadHistorical(); */
  };

  function handlerHistorical() {
    let arrFiltered = historicalData.filter((elm) => {
      return Object.keys(elm.data).toString() === currentFavorite;
    });

    sethistoricalUSD([
      {
        name: `${currentFavorite} USD`,
        data: arrFiltered.map((el, idx) => {
          let ky = Object.keys(el.data).toString();
          return [
            moment()
              .subtract({ [timeIntervalUSD]: TIME_UNITS - idx })
              .valueOf(),
            el.data[ky].USD,
          ];
        }),
      },
    ]);
    sethistoricalEUR([
      {
        name: `${currentFavorite} EUR`,
        data: arrFiltered.map((el, idx) => {
          let ky = Object.keys(el.data).toString();
          return [
            moment()
              .subtract({ [timeIntervalEUR]: TIME_UNITS - idx })
              .valueOf(),
            el.data[ky].EUR,
          ];
        }),
      },
    ]);
  }

  const handlerCurrentFavorite = (sym) => {
    setcurrentFavorite(sym);

    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym,
      })
    );
    /*    if (page === 'settings') {
      loadHistorical(sym);
    } */
  };

  useEffect(() => {
    getCoins();
    savedSettings();
    /*     return () => {
      deleteHistorical();
    }; */
  }, []);

  useEffect(() => {
    if (data || Object.keys(coinList).length === 0) {
      setcoinList(data);
      if (cryptoDashData) {
        setcurrentFavorite(cryptoDashData.currentFavorite);
      }
    }
  }, [data]);

  useEffect(() => {
    if (confirmFavorites) {
      confirmFav();
    }
  }, [confirmFavorites]);

  useEffect(() => {
    if (historicalData.length > 0) {
      handlerHistorical();
    }
  }, [historicalData]);
  useEffect(() => {
    if (currentFavorite) {
      loadHistorical(currentFavorite);
    }
  }, [currentFavorite, timeIntervalEUR, timeIntervalUSD]);

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
    historicalUSD,
    historicalEUR,
    settimeIntervalUSD,
    settimeIntervalEUR,
  ];

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
