import { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { StyledDivContainerHome } from "../../components/StyledDivContainerHome/StyledDivContainerHome";
import { StyledDivHome } from "../../components/StyledDivHome/StyledDivHome";
import { UserContext } from "../../components/User/UserContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <>
      <Header mode={"home"} />
      <StyledDivHome>
        <div>
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </div>
      </StyledDivHome>
      <StyledDivContainerHome>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </StyledDivContainerHome>
    </>
  );
};
