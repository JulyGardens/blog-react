import { ModalWindowProps } from "./index.props";
import {
  StyledCloseButton,
  StyledModalContent,
  StyledModalContainer,
} from "./index.styles";
import CloseSvg from "./public/close.svg";

export const ModalWindow = ({
  children,
  toggle,
  state = false,
}: ModalWindowProps) => {
  const onClick = () => toggle(!state);

  return state ? (
    <StyledModalContainer>
      <StyledModalContent>
        <StyledCloseButton
          src={CloseSvg}
          onClick={onClick}
          alt="close-button"
          title="Close Modal"
        />
        {children}
      </StyledModalContent>
    </StyledModalContainer>
  ) : null;
};
