import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { Theme } from "./Theme";

export const StyledToasty = styled(ToastContainer)`
  .Toastify__toast--success {
    background-color: ${Theme.colors.grey2};
    font-size: 14px;
    color: ${Theme.colors.grey0};
    font-weight: 700;

    .Toastify__toast-body {
      svg {
        fill: ${Theme.colors.success};
      }
    }
    .Toastify__progress-bar--success {
      background-color: ${Theme.colors.success};
    }
  }
  .Toastify__toast--error {
    font-weight: 700;
    color: ${Theme.colors.grey0};
    font-size: 14px;
    background-color: ${Theme.colors.grey2};

    .Toastify__toast-body {
      svg {
        fill: ${Theme.colors.negative};
      }
    }
    .Toastify__progress-bar--error {
      background-color: ${Theme.colors.negative};
    }
  }
`;
