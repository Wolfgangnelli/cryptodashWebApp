import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import CoinTile from "./CoinTile";

const CoinLists = ({ data, getCoins, topSection }) => {
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
  }, [data, coinList]);

  function getCoinToDisplay(topSection) {
    /* console.log(Object.keys(coinList).slice(0, 100)); */
    return Object.keys(coinList).slice(0, topSection ? 10 : 100);
  }

  return (
    <div>
      {!isEmpty(coinList) ? (
        <>
          <h2 className="uppercase h2">
            {topSection ? (
              <span>First ten coins</span>
            ) : (
              <span>Total Coin Lists: {Object.keys(coinList).length}</span>
            )}
          </h2>
          <div className="grid grid-cols-4 gap-4 pt-2">
            {getCoinToDisplay(topSection).map((coinK, idx) => (
              <CoinTile
                topSection={topSection}
                coinK={coinK}
                key={idx}
                coinList={coinList}
              />
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
