import { ButtonProps } from "./index.props";
import { StyledButton } from "./index.styles";

export const Button = ({ children, onButtonClick }: ButtonProps) => {
  return <StyledButton onClick={onButtonClick}>{children}</StyledButton>;
};
