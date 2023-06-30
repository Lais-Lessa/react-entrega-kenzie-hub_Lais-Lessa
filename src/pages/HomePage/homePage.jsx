import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { StyledDivHome } from "../../components/StyledDivHome/StyledDivHome";
import { UserContext } from "../../../providers/User/UserContext";
import { useNavigate } from "react-router-dom";
import { TechSection } from "./TechSection/TechSection";
import { StyledSpanHome } from "./TechSection/StyledTech/StyledSpanHome";
import { Modal } from "../../components/Modal/modal";
import { Title3 } from "../../styles/StyledTitle";
import { StyledPlusIcon } from "../../styles/StyledIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledNewTechDiv } from "./TechSection/StyledTech/StyledNewTechDiv";
import { ModalHomePage } from "./Modal/ModalHomePage";
import { ToastContainer } from "react-toastify";
import { TechContext } from "../../../providers/TechContext";

export const HomePage = () => {
  const navigate = useNavigate();

  const { user, setIsOpenModal, isOpenModal, isOpenEditModal } =
    useContext(UserContext);
const { tech } = useContext(TechContext)

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <main>
      <Header mode={"home"} />
      {isOpenModal && <Modal />}
      {isOpenEditModal && <ModalHomePage />}
      <ToastContainer />
      <StyledDivHome>
        <div>
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </div>
      </StyledDivHome>
      <StyledNewTechDiv>
        <h2>Tecnologias</h2>
        <StyledPlusIcon icon={faPlus} onClick={openModal} />
      </StyledNewTechDiv>
      <StyledSpanHome>
        {tech.length === 0 ? (
          <Title3>Ainda não possui nenhuma tecnologia cadastrada </Title3>
        ) : (
          <TechSection />
        )}
      </StyledSpanHome>
    </main>
  );
};
