import { connect } from "react-redux";
import { getCoins } from "../Actions/index";
import CoinLists from "../Components/CoinLists";

const mapStateToProps = (state) => {
  console.log("cointainer--> " + JSON.stringify(state.listCoins.data));
  return {
    data: state.listCoins.data,
  };
};

export default connect(mapStateToProps, { getCoins })(CoinLists);
