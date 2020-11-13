import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../HOC/AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
  border: 1px solid green;
  border-radius: 5px;
  padding: 2px;
  &:hover {
    color: yellow;
    border-color: yellow;
  }
`;
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export function ConfirmButton() {
  const [, , , setConfirmFavorites] = useContext(AppContext);

  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={() => setConfirmFavorites("Hello")}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
}
