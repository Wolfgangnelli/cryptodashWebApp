import React from "react";
import styled from "styled-components";
import Page from "../Pages/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 120px;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr;
`;

const Dashboard = () => {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <div className="chart-grid">
        <CoinSpotlight />
        <div className="chart-grid-tile">
          <PriceChart />
          <div className="mt-4">
            <PriceChart euro={true} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
