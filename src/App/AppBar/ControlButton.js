import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const ContolButtonElem = styled.div`
  cursor: pointer;
  text-transform: capitalize ;
}
    ${(props) =>
      props.active &&
      css`
        text-shadow: -1px 1px 30px #03ff03, 1px -1px 20px #03ff03;
      `};
`;

export default function ControlButton(props) {
  return (
    <AppContext.Consumer>
      {({ activePage, setActivePage }) => (
        <ContolButtonElem
          active={activePage === props.name}
          onClick={() => setActivePage(props.name)}
        >
          {props.name}
        </ContolButtonElem>
      )}
    </AppContext.Consumer>
  );
}
