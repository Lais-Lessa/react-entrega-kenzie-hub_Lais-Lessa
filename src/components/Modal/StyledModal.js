import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledModalContent = styled.div`
  width: 97%;
  max-width: 369px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.grey3};
`;
