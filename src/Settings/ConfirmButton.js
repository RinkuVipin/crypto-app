import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppBar/AppProvider";
import { color3, fontSize1, greenBoxShadow } from "../Shared/Styles";

const ConfirmFavourite = styled.div`
  margin: 20px;
  padding: 5px;
  cursor: pointer;
  color: ${color3};
  ${fontSize1}
  &:hover {
    ${greenBoxShadow}
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavourites }) => (
        <CenterDiv>
          <ConfirmFavourite onClick={confirmFavourites}>
            Confirm Favourite
          </ConfirmFavourite>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
