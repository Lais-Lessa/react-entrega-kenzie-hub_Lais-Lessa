import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledForm = styled.form`
  width: 95%;
  max-width: 369px;
  background-color: ${Theme.colors.grey3};
  margin: 0 auto;
  padding: 42px 22px 28px;
  border-radius: 4px;

  h2 {
    color: ${Theme.colors.grey0};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }

  h3 {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    color: ${Theme.colors.grey1};
    text-align: center;
    margin: 34px auto 22px;
  }

  p {
    color: ${Theme.colors.grey1};
    margin-top: 15px;
  }
`;
