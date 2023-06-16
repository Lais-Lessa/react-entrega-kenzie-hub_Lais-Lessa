import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
    max-width: 369px;
    margin: 0 auto;
    margin-top: 26px;
    
    label {
        font-size: Inter, sans-serif;
        font-weight: 400;
        font-size: 12.18px;
        color: ${Theme.colors.grey0};
    }

    select {
        
        color: ${Theme.colors.grey0};
    
    }

    input,
    select{
        width: 100%;
        height:48px;
        border-radius: 4px;
        margin-top: 22px;
        background-color: ${Theme.colors.grey2};
        padding: 0 16px;
        color: ${Theme.colors.grey0};
        outline: none;
        border: none;

    }

    input: hover, 
    input:focus {
        border: 1px solid ${Theme.colors.grey0};
    }


    input > placeholder {
        color: ${Theme.colors.grey0};
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

`;
