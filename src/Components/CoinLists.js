import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const CoinLists = ({ data, getCoins }) => {
  //const coinsL = useSelector((state) => state.listCoins.data);
  const [coinList, setcoinList] = useState({});
  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    console.log("data--> " + data);
    setcoinList(data);
    console.log("coinList--> " + coinList);
  }, [data]);

  function isEmpty(obj) {
    return Object.keys(obj).length > 0;
  }

  return (
    <div>
      {isEmpty(coinList) ? (
        <ul>
          <li>Coins</li>
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CoinLists;
