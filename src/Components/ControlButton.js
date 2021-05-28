import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { toProperCase } from "../Helpers/functions";
import { AppContext } from "../HOC/AppProvider";

const ControlButtonElem = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 40px #ffff05;
    `}
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const ControlButton = ({ name }) => {
  const [, page, setPage, firstVisit] = useContext(AppContext);
  return (
    <ControlButtonElem
      active={page === name}
      onClick={() => setPage(name)}
      hidden={firstVisit && name === "dashboard"}
    >
      {toProperCase(name)}
    </ControlButtonElem>
  );
};

export default ControlButton;
