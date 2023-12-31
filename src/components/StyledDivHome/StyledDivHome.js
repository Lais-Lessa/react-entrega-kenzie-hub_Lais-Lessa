import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledDivHome = styled.div`
  width: 100%;
  height: 118px;
  border-bottom: 1px solid ${Theme.colors.grey3};
  border-top: 1px solid ${Theme.colors.grey3};

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 118px;
    max-width: 768px;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

      h3 {
        padding: 0 12px;
      }
    }

    h2 {
      color: ${Theme.colors.grey0};
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      padding: 0 12px;
    }

    h3 {
      font-size: 12px;
      font-weight: 600;
      line-height: 18px;
      color: ${Theme.colors.grey1};
      text-align: center;
    }
  }
`;
