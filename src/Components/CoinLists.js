import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CoinListLayout = styled.div`
  display: grid;
`;

const CoinLists = ({ data, getCoins }) => {
  const [coinList, setcoinList] = useState({});
  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    console.log("data--> " + data);
    setcoinList(data);
    console.log("coinList--> " + coinList);
  }, [data]);

  return (
    <CoinListLayout>
      <ul>
        <li>Coins</li>
      </ul>
    </CoinListLayout>
  );
};

export default CoinLists;
