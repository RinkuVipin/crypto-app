import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import CoinImage from "../Settings/CoinImage";
import { fontSize1 } from "../Shared/Styles";
import { Tile } from "../Shared/Tile";

const StyledHeader = styled.div`
  text-align: center;
  ${fontSize1}
`;

export default function CoinSpotlight() {
  return (
    <AppContext.Consumer>
      {({ topFavorite, coinList }) => (
        <Tile>
          <StyledHeader>{coinList[topFavorite].CoinName}</StyledHeader>
          <CoinImage coin={coinList[topFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
