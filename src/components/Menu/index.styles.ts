import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
`;

export const StyledClosedMenu = styled.img`
  height: 25px;
  width: fit-content;
  rotate: 90deg;
`;

export const StyledOpenMenu = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
