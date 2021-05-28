import React, { useContext } from "react";
import highchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../HOC/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
import Loading from "../Components/Loading";
import CharSelect from "./CharSelect";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = ({ euro }) => {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    historicalUSD,
    historicalEUR,
    settimeIntervalUSD,
    settimeIntervalEUR,
  ] = useContext(AppContext);

  return (
    <Tile>
      {euro ? (
        <>
          {historicalEUR ? (
            <>
              <CharSelect
                defaultValue="months"
                onChange={(e) => settimeIntervalEUR(e.target.value)}
              >
                <option value="days"> Days </option>
                <option value="weeks"> Weeks </option>
                <option value="months"> Months </option>
              </CharSelect>
              <ReactHighcharts config={highchartsConfig(historicalEUR)} />
            </>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <>
          {historicalUSD ? (
            <>
              <CharSelect
                defaultValue="months"
                onChange={(e) => settimeIntervalUSD(e.target.value)}
              >
                <option value="days"> Days </option>
                <option value="weeks"> Weeks </option>
                <option value="months"> Months </option>
              </CharSelect>
              <ReactHighcharts config={highchartsConfig(historicalUSD)} />
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </Tile>
  );
};

export default PriceChart;
