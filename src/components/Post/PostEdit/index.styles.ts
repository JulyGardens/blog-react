import styled from "styled-components";

export const StyledPostEditContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledPostEditChangeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledPostEditTitle = styled.p`
  position: absolute;
  margin: 5px;
  padding: 0;
  font-size: 48px;
  top: 0;
`;

export const StyledPostEditChangeContainer = styled.div`
  text-align: center;
`;

export const StyledPostEditChangeContainerText = styled.p`
  margin: 0 0 5px 0;
  padding: 0;
`;

export const StyledPostEditConfirmSection = styled.div`
  margin: 0 0 5px 0;
  position: absolute;
  bottom: 0;
`;
