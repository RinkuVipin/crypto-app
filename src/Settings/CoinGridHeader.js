import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const CoinSymbolStyled = styled.div`
  justify-self: right;
`;

const DeleteButton = styled.div`
  justify-self: right;
  display: none;

  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;
export default function CoinGridHeader({ coinName, coinSymbol, favSection }) {
  return (
    <CoinHeaderStyled>
      <div>{coinName}</div>
      {favSection ? (
        <DeleteButton>X</DeleteButton>
      ) : (
        <CoinSymbolStyled>{coinSymbol}</CoinSymbolStyled>
      )}
    </CoinHeaderStyled>
  );
}
