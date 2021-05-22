import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../HOC/AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  cursor: pointer;
  border: 1px solid green;
  border-radius: 5px;
  padding: 2px;
  &:hover {
    color: yellow;
    border-color: yellow;
    ${greenBoxShadow};
  }
`;
const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export function ConfirmButton() {
  const [, , , , confirmFavorites, setConfirmFavorites] =
    useContext(AppContext);

  return (
    <CenterDiv>
      <ConfirmButtonStyled
        onClick={() => setConfirmFavorites(!confirmFavorites)}
      >
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
}
