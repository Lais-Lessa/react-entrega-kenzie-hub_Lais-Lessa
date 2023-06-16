import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledLink = styled(Link)`
  border-radius: 4px;
  padding: 0 16px;
  color: ${Theme.colors.grey0};
  font-size: 12.81px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${Theme.colors.grey3};
  text-decoration: none;
  cursor: pointer;
`;
