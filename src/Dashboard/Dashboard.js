import React from "react";
import styled from "styled-components";
import Page from "../Shared/Page";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./PriceChart";
import PriceGrid from "./PriceGrid";

const ChartGrid = styled.div`
  display: grid;
  grid-gaps: 15px;
  grid-template-columns: 1fr 3fr;
  margin-top: 20px;
`;

export default function Dashboard() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
}
