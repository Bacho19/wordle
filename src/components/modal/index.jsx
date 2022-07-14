import { ModalWrapper } from "./styled";

const Modal = ({ children, isActive }) => {
  return (
    <ModalWrapper isActive={isActive}>
      {children}
    </ModalWrapper>
  )
};

export default Modal;
