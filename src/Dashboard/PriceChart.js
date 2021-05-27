import React, { useContext } from "react";
import highchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../HOC/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
import Loading from "../Components/Loading";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = ({ euro }) => {
  const [, , , , , , , , , , , , , historicalUSD, historicalEUR] =
    useContext(AppContext);

  return (
    <Tile>
      {euro ? (
        <>
          {historicalEUR ? (
            <ReactHighcharts config={highchartsConfig(historicalEUR)} />
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <>
          {historicalUSD ? (
            <ReactHighcharts config={highchartsConfig(historicalUSD)} />
          ) : (
            <Loading />
          )}
        </>
      )}
    </Tile>
  );
};

export default PriceChart;
