import { Menu } from "../../Menu";
import { PostCardMenuProps } from "./index.props";
import {
  PostCardMenuCloseButton,
  PostCardMenuDeletePost,
  PostCardMenuUpdatePost,
} from "./index.styles";

import DeleteSvg from "./public/delete.svg";
import UpdateSvg from "./public/update.svg";
import CloseSvg from "./public/close.svg";

export const PostCardMenu = ({
  onUpdate,
  onClose,
  onDelete,
  state,
  toggle,
}: PostCardMenuProps) => {
  return (
    <Menu state={state} toggle={toggle}>
      <PostCardMenuUpdatePost
        src={UpdateSvg}
        alt="update-post"
        onClick={onUpdate}
        title="Update Blog"
      />
      <PostCardMenuDeletePost
        src={DeleteSvg}
        alt="delete-post"
        onClick={onDelete}
        title="Delete Blog"
      />
      <PostCardMenuCloseButton
        src={CloseSvg}
        alt="close-menu"
        onClick={onClose}
        title="Close Menu"
      />
    </Menu>
  );
};
