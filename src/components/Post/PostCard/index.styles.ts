import styled, { css } from "styled-components";
import { StyledProps } from "./index.props";

export const PostCardContainer = styled.div<StyledProps>`
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  flex-direction: column;

  ${(props) =>
    props.size === "small"
      ? css`
          width: 300px;
          height: 300px;
        `
      : css`
          width: 1200px;
          height: 800px;
        `}
`;

export const PostCardTitleText = styled.p`
  width: 100%;
  margin: 0;
`;

export const PostCardTitleContainer = styled.div<StyledProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  text-align: center;

  ${(props) =>
    props.size === "small"
      ? css`
          :hover {
            cursor: pointer;
          }
        `
      : css`
          font-size: 46px;
        `}
`;

export const PostCardBodyContainer = styled.div``;

export const PostCardBodyText = styled.p<StyledProps>`
  margin: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  ${(props) =>
    props.size === "small"
      ? css`
          height: 150px;
        `
      : css`
          height: 200px;
          font-size: 46px;
        `}
`;

export const PostCardMenuContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const PostCardMenuDeletePost = styled.img`
  height: 25px;
  width: 25px;
`;

export const PostCardMenuCloseButton = styled.img`
  height: 25px;
  width: 25px;
`;

export const PostCardMenuUpdatePost = styled.img`
  height: 20px;
  width: 25px;
`;
