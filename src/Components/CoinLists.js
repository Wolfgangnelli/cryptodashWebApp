import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import CoinKey from "./CoinKey";

const CoinLists = ({ data, getCoins }) => {
  //const coinsL = useSelector((state) => state.listCoins.data);
  const [coinList, setcoinList] = useState({});

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    if (isEmpty(coinList)) {
      setcoinList(data);
    }
  }, []);

  return (
    <div>
      {!isEmpty(coinList) ? (
        <>
          <h2 className="uppercase h2">
            Total Coin Lists: {Object.keys(coinList).length}
          </h2>
          <div className="grid grid-cols-4 gap-4 pt-2">
            {Object.keys(coinList).map((coin, i) => (
              <CoinKey coin={coin} key={i} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default React.memo(CoinLists);
