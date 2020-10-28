import React from "react";
import styled, { css } from "styled-components";

const StyledImage = styled.img`
  height: 50px;
  margin-top: 6px;

  ${(props) =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: 16px auto;
    `}
`;

export default function CoinImage({ coin, spotlight }) {
  return (
    <StyledImage
      alt={coin.Symbol}
      src={`https://www.cryptocompare.com/${coin.ImageUrl}`}
      spotlight={spotlight}
    />
  );
}
