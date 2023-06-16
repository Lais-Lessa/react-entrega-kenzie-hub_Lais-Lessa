import { useContext } from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledLink } from "./StyledLink";
import { UserContext } from "../User/UserContext";

export const Header = ({ mode }) => {
  const { updateUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateUser(null);
  };

  return (
    <StyledHeader mode={mode === "register" ? "register" : "home"}>
      <img src="/Logo.svg" alt="Logotipo Kenziehub" />
      {mode === "register" && <StyledLink to={"/"}>Voltar</StyledLink>}
      {mode === "home" && (
        <StyledLink to={"/"} onClick={handleLogout}>
          Sair
        </StyledLink>
      )}
    </StyledHeader>
  );
};
