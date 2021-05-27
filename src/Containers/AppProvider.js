import { connect } from "react-redux";
import {
  getCoins,
  getPrices,
  getHistorical,
  deleteHistorical,
} from "../Actions/index";
import { AppProvider } from "../HOC/AppProvider";

const mapStateToProps = (state) => {
  //console.log("cointainer--> " + JSON.stringify(state.listCoins.data));
  return {
    data: state.listCoins.data,
    coinPrices: state.coinPrices.data,
    historicalData: state.historicalData.data,
  };
};

export default connect(mapStateToProps, {
  getCoins,
  getPrices,
  getHistorical,
  deleteHistorical,
})(AppProvider);
