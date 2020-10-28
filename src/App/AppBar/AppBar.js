import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import ControlButton from "./ControlButton";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

export default function AppBar() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => (
        <Bar>
          <Logo>CRYPTO APP</Logo>
          <div />
          {firstVisit ? null : <ControlButton name="dashboard"></ControlButton>}
          <ControlButton name="settings"></ControlButton>
        </Bar>
      )}
    </AppContext.Consumer>
  );
}
