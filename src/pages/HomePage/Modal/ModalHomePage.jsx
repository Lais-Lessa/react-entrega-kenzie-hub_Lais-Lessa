import React, { useContext } from "react";
import { StyledModalContent } from "../../../components/Modal/StyledModal";
import { StyledHeaderModal } from "../../../components/Modal/StyledHeaderModal";
import { StyledModalContainer } from "../../../components/Modal/StyledModalContainer";
import { ModalForm } from "../../../components/Modal/modalForm";
import { UserContext } from "../../../providers/User/UserContext";

export const ModalHomePage = () => {
  const { setIsOpenEditModal } = useContext(UserContext);

  return (
    <StyledModalContent>
      <StyledHeaderModal>
        <h3>Tecnologia Detalhes</h3>
        <span onClick={() => setIsOpenEditModal(false)}>X</span>
      </StyledHeaderModal>
      <StyledModalContainer>
        <ModalForm />
      </StyledModalContainer>
    </StyledModalContent>
  );
};
