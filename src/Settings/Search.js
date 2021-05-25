import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../HOC/AppProvider";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  color: #1163c9;
  border: 1px solid;
  height: 30px;
  place-self: center start;
`;

const Search = () => {
  const [coinList, , , , , , , , setfilteredCoins] = useContext(AppContext);

  const handleFilter = _.debounce((inputValue) => {
    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map((sym) => coinList[sym].CoinName);
    let allStringToSearch = coinSymbols.concat(coinNames);

    let fuzzyResult = fuzzy
      .filter(inputValue, allStringToSearch)
      .map((el) => el.string);
    let filteredCoinss = _.pickBy(coinList, (coinValue, symKey) => {
      let coinName = coinValue.CoinName;
      return fuzzyResult.includes(symKey) || fuzzyResult.includes(coinName);
    });
    /* console.log(filteredCoinss); */
    setfilteredCoins(filteredCoinss);
  }, 500);

  const filterCoins = (e) => {
    let inputValue = e.target.value;
    if (!inputValue) {
      setfilteredCoins(null);
      return;
    }
    handleFilter(inputValue);
  };

  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput onKeyUp={(e) => filterCoins(e)} />
    </SearchGrid>
  );
};

export default Search;
