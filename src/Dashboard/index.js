import React from "react";
import styled from "styled-components";
import Page from "../Pages/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 40px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;

const Dashboard = () => {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
};

export default Dashboard;
