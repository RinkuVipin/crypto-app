import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import { CoinHeaderStyled, CoinSymbolStyled } from "../Settings/CoinGridHeader";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { SelectableTile } from "../Shared/Tile";

const StyledPriceTile = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3};
    `}

  ${(props) =>
    props.topFavorite &&
    css`
      pointer-events: none;
      ${greenBoxShadow};
    `}
`;

const StyledPrice = styled.div`
  ${fontSizeBig};
`;

const StyledChangePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

const priceFormat = (price) => {
  return +(price + " ").slice(0, 7);
};

export default function PriceTile({ price, index }) {
  let coinSymbol = Object.keys(price);
  let coin = price[coinSymbol]["USD"];
  return (
    <AppContext.Consumer>
      {({ topFavorite, highlightFavorite }) => (
        <StyledPriceTile
          topFavorite={topFavorite === coinSymbol[0]}
          onClick={() => highlightFavorite(coinSymbol[0])}
        >
          <CoinHeaderStyled>
            {coinSymbol}
            <CoinSymbolStyled>
              <StyledChangePct red={coin.CHANGEPCT24HOUR < 0}>
                {priceFormat(coin.CHANGEPCT24HOUR)}%
              </StyledChangePct>
            </CoinSymbolStyled>
          </CoinHeaderStyled>
          <StyledPrice>${priceFormat(coin.PRICE)}</StyledPrice>
        </StyledPriceTile>
      )}
    </AppContext.Consumer>
  );
}
