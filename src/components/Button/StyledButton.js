import styled, { css } from "styled-components";
import { Theme } from "../../styles/Theme";
import { Link } from "react-router-dom";

const SecondaryButton = css`
  width: 100%;
  height: 48px;
  background-color: ${Theme.colors.grey1};
`;

export const StyledAnchor = styled(Link)`
  border-radius: 4px;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 100%;
  color: ${Theme.colors.grey0};
  font-size: 12.81px;
  font-weight: 600;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  ${(props) => props.mode === "secondary" && SecondaryButton};
`;
