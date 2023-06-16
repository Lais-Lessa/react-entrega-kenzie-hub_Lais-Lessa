import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledDivContainerHome = styled.div`
  max-width: 768px;
  margin: 0 auto;

  h2 {
    margin-top: 37px;
    color: ${Theme.colors.grey0};
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-top: 23px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffffff;
  }
`;
