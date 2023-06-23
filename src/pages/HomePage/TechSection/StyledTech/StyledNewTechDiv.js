import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

export const StyledNewTechDiv = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  align-items: center;

  h2 {
    color: ${Theme.colors.grey0};
    font-size: 16px;
    font-weight: 600;
  }
`;
