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
  margin: 77px auto;
  text-align: center;

  ${(props) => props.mode === "register" && HeaderRegister}
  ${(props) => props.mode === "home" && HeaderHomePage}
`;
