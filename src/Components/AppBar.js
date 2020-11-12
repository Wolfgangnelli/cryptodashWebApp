import React from "react";
import styled from "styled-components";
import ControlButton from "./ControlButton";

const Logo = styled.div`
  font-size: 1.5em;
  margin-right: 2px;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  color: white;
  grid-template-columns:
    minmax(min-content, 180px) auto minmax(min-content, 100px)
    minmax(min-content, 100px);
`;

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name={"dashboard"} />
      <ControlButton name={"settings"} />
    </Bar>
  );
};

export default AppBar;
