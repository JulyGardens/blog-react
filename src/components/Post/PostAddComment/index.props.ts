export interface PostAddCommentProps {
  postId: number;
  toggleModal: (opt: boolean) => void;
  modalState: boolean;
}
