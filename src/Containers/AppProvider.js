import { connect } from "react-redux";
import { getCoins, getPrices } from "../Actions/index";
import { AppProvider } from "../HOC/AppProvider";

const mapStateToProps = (state) => {
  //console.log("cointainer--> " + JSON.stringify(state.listCoins.data));
  return {
    data: state.listCoins.data,
    coinPrices: state.coinPrices.data,
  };
};

export default connect(mapStateToProps, { getCoins, getPrices })(AppProvider);
