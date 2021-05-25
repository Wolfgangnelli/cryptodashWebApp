import React, { useContext } from "react";
import { AppContext } from "../HOC/AppProvider";
import Loading from "../Components/Loading";

const Content = (props) => {
  const [coinList, , , firstVisit, , , , , , , coinPrices] =
    useContext(AppContext);
  return (
    <div>
      {!coinList || (!firstVisit && !coinPrices) ? (
        <Loading />
      ) : (
        <div className="w-full max-w-7xl mx-auto">{props.children}</div>
      )}
    </div>
  );
};

export default Content;
