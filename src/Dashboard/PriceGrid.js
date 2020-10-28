import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import PriceTile from "./PriceTile";

const StyledPriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ priceList }) => (
        <StyledPriceGrid>
          {priceList.map((price, index) => (
            <PriceTile key={Object.keys(price)} price={price} index={index} />
          ))}
        </StyledPriceGrid>
      )}
    </AppContext.Consumer>
  );
}
