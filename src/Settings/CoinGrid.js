import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import CoinTile from "./CoinTile";

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

const getSearchCoins = (coinList, filteredCoins) => {
  return filteredCoins ? filteredCoins : Object.keys(coinList).slice(0, 100);
};

const fetchCoinList = (coinList, favSection, favorites, filteredCoins) => {
  return favSection ? favorites : getSearchCoins(coinList, filteredCoins);
};

export default function CoinGrid({ favSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridStyled>
          {fetchCoinList(coinList, favSection, favorites, filteredCoins).map(
            (coinKey) => (
              <CoinTile
                key={coinKey}
                coinKey={coinKey}
                favSection={favSection}
              />
            )
          )}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
