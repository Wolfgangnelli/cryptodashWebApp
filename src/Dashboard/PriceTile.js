import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { CoinHeaderGridStyled } from "../Settings/CoinHeaderGridStyled";
import { AppContext } from "../HOC/AppProvider";

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
    `}
  ${(props) =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;
const JustifyRight = styled.div`
  justify-self: right;
`;
const TickerPrice = styled.div`
  ${fontSizeBig};
  border-top: 1px solid gray;
  display: flex;
  flex-direction: column;
`;
const CoinHeaderGridStyledDash = styled(CoinHeaderGridStyled)`
  grid-template-columns: 1fr 2fr;
`;
const ChagePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

function ChangePercent({ dataE, dataU }) {
  return (
    <JustifyRight>
      <p className="text-blue-700">CHANGE % 24H</p>
      <div className="flex">
        <ChagePct red={dataE.CHANGEPCT24HOUR < 0}>
          <span> $ {dataU.CHANGEPCT24HOUR}%</span> ;{" "}
        </ChagePct>
        <ChagePct red={dataE.CHANGEPCT24HOUR < 0}>
          <span> € {dataE.CHANGEPCT24HOUR}%</span>
        </ChagePct>
      </div>
    </JustifyRight>
  );
}

function PriceTileStyle({
  sym,
  dataU,
  dataE,
  currentFavorite,
  handlerCurrentFavorite,
}) {
  return (
    <PriceTileStyled
      currentFavorite={currentFavorite}
      onClick={handlerCurrentFavorite}
    >
      <CoinHeaderGridStyledDash>
        <div className="text-purple-700 flex items-center justify-center font-bold">
          {sym}:{" "}
        </div>
        <ChangePercent dataU={dataU} dataE={dataE} />
      </CoinHeaderGridStyledDash>
      <div className="border border-purple-400 my-1"></div>
      <TickerPrice>
        <span>{dataU.PRICE}</span>
        <span>{dataE.PRICE}</span>
      </TickerPrice>
    </PriceTileStyled>
  );
}

const PriceTile = ({ price, sym, idx }) => {
  const [, , , , , , , , , , , currentFavorite, handlerCurrentFavorite] =
    useContext(AppContext);
  let dataDollar = price["USD"];
  let dataEur = price["EUR"];

  return (
    <PriceTileStyle
      sym={sym}
      dataU={dataDollar}
      dataE={dataEur}
      currentFavorite={currentFavorite === sym}
      handlerCurrentFavorite={() => handlerCurrentFavorite(sym)}
    />
    /* compact={idx >= 5} */
  );
};

export default PriceTile;
