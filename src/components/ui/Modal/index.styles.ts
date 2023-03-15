import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StyledModalContent = styled.div`
  position: relative;
  height: 600px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  border: 1px solid black;
`;

export const StyledCloseButton = styled.img`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0;
`;
