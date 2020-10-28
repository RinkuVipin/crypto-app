import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2};
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`;

const searchCoins = (event, coinList, setFilteredCoins) => {
  let searchInput = event.target.value;

  const coinSymbols = Object.keys(coinList);
  const coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
  let coinSearchList = coinSymbols.concat(coinNames);

  let searchResult;
  setTimeout(() => {
    searchResult = coinSearchList.filter((elem) => elem.includes(searchInput));

    let filteredCoins = Object.keys(coinList)
      .filter((key) => {
        return (
          searchResult.includes(key) ||
          searchResult.includes(coinList[key].CoinName)
        );
      })
      .map((key) => coinList[key]);

    let filteredKeys = [];
    let keyValue = 0;
    if (filteredCoins) {
      Object.entries(filteredCoins).forEach(([key, value]) => {
        keyValue = Object.keys(coinList).find((key) => {
          return coinList[key].Id === value.Id;
        });
        filteredKeys.push(keyValue);
      });
    }

    setFilteredCoins(filteredKeys);
  }, 500);
};

export default function SearchCoin() {
  return (
    <AppContext.Consumer>
      {({ coinList, setFilteredCoins }) => (
        <SearchGrid>
          <h2>Search Coin</h2>
          <SearchInput
            onKeyUp={(event) => searchCoins(event, coinList, setFilteredCoins)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
