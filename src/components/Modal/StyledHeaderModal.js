import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledHeaderModal = styled.div`
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:50px;
        border-radius: 4px;
        padding: 12px 20px;
        background-color: ${Theme.colors.grey2};

        h3{
            color: ${Theme.colors.grey0};
            font-size: 14px;
            font-weight: 700;
        }

        span{
            font-size:16px;
            font-weight:600;
            color: ${Theme.colors.grey1};
            cursor: pointer;
        }
    }
`;
