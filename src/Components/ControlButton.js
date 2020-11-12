import React from "react";
import styled, { css } from "styled-components";
import { toProperCase } from "../Helpers/functions";

const ControlButtonElem = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

const ControlButton = ({ name, active }) => {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
};

export default ControlButton;
