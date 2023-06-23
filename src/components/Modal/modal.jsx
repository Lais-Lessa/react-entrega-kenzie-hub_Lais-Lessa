import { useContext } from "react";
import { StyledHeaderModal } from "./StyledHeaderModal";
import { StyledModalContent } from "./StyledModal";
import { StyledModalContainer } from "./StyledModalContainer";
import { ModalForm } from "./modalForm";
import { UserContext } from "../../../providers/User/UserContext";

export const Modal = () => {
  const { setIsOpenModal } = useContext(UserContext);

  return (
    <StyledModalContent>
      <StyledHeaderModal>
        <h3>Cadastrar Tecnologia</h3>
        <span onClick={() => setIsOpenModal(false)}>X</span>
      </StyledHeaderModal>
      <StyledModalContainer>
        <ModalForm />
      </StyledModalContainer>
    </StyledModalContent>
  );
};
