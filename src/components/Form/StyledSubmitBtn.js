import styled, { css } from "styled-components";
import { Theme } from "../../styles/Theme";

const DisabledButton = css`
  margin-top: 20px;
  width: 100%;
  height: 48px;
  background-color: ${Theme.colors.colorPrimaryNegative};
`;
const PrimaryButton = css`
  width: 100%;
  height: 48px;
  background-color: ${Theme.colors.colorPrimary};
  margin-top: 24px;
`;
export const StyledSubmitBtn = styled.button`
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

  ${(props) => props.mode === "primary" && PrimaryButton};

  ${(props) => props.mode === "disabled" && DisabledButton};
`;
