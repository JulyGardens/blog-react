import { MenuProps } from "./index.props";
import Dots from "./public/dots.svg";
import {
  StyledClosedMenu,
  StyledMenuContainer,
  StyledOpenMenu,
} from "./index.styles";

export const Menu = ({ children, state, toggle }: MenuProps) => {
  const openOnClick = () => toggle(!state);
  const closeOnClick = () => toggle(!state);

  return (
    <StyledMenuContainer>
      {state ? (
        <StyledOpenMenu onClick={closeOnClick}>{children}</StyledOpenMenu>
      ) : (
        <StyledClosedMenu
          onClick={openOnClick}
          src={Dots}
          alt="menu-dots"
          title="Open Menu"
        />
      )}
    </StyledMenuContainer>
  );
};
