import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import React from "react";
import { AppContext } from "../App/AppBar/AppProvider";

const StyledSelect = styled.select`
  ${backgroundColor2};
  ${fontSize2};
  color: #1163c9;
  border: 1px solid;
  margin: 5px;
  height: 25px;
  float: right;
`;

export default function ChartSelect() {
  return (
    <AppContext.Consumer>
      {({ changeChartSelect }) => (
        <StyledSelect
          defaultValue="months"
          onChange={(event) => changeChartSelect(event.target.value)}
        >
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
        </StyledSelect>
      )}
    </AppContext.Consumer>
  );
}
