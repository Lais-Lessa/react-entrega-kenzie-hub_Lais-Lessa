import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${Theme.colors.grey1};
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  bottom: 16px;
  right: 16px;
`;

export const StyledPlusIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  color: white;
  background-color: ${Theme.colors.grey2};
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`;
