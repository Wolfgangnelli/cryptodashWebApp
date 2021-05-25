import React, { useContext } from "react";
import highchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../HOC/AppProvider";
import Highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  const [
    /* coinList,
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
        handlerCurrentFavorite, */
  ] = useContext(AppContext);
  return (
    <Tile>
      <ReactHighcharts config={highchartsConfig()} />
    </Tile>
  );
};

export default PriceChart;
