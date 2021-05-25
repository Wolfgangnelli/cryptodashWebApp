import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../HOC/AppProvider";
import { Tile } from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";
import Loading from "../Components/Loading";

const SpotlightName = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
`;

const CoinSpotlight = () => {
  const [coinList, , , , , , , , , , , currentFavorite] =
    useContext(AppContext);

  return (
    <>
      {coinList[currentFavorite] && coinList[currentFavorite].CoinName ? (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CoinSpotlight;
