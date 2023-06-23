import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

export const StyledItemTech = styled.li`
  width: 100%;
  height: 49px;
  background-color: ${Theme.colors.grey4};
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover span {
    color: ${Theme.colors.grey0};
  }

  &:hover,
  &:focus {
    background-color: ${Theme.colors.grey2};
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: white;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${Theme.colors.grey1};
  }
`;
