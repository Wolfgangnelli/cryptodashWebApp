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
`;

const ControlButton = ({ name }) => {
  const [page, setPage] = useContext(AppContext);
  return (
    <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
      {toProperCase(name)}
    </ControlButtonElem>
  );
};

export default ControlButton;
