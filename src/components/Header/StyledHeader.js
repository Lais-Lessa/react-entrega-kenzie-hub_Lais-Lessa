import styled, { css } from "styled-components";
import { Theme } from "../../styles/Theme";

const HeaderRegister = css`
  display: flex;
  justify-content: space-between;
`;

const HeaderHomePage = css`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 369px;
  height: 100%;
  background-color: ${Theme.colors.grey4};
  margin: 77px auto 35px;
  text-align: center;
  

  @media(max-width:768px){
    padding: 0 15px 0 15px;
  }
  ${(props) => props.mode === "register" && HeaderRegister}
  ${(props) => props.mode === "home" && HeaderHomePage}
`;
