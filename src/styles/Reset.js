import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalReset = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

body{
    background-color:${Theme.colors.grey4};
}
button{
    cursor: pointer;
    background: transparent;
    border: none;
}

ul, ol {
    list-style: none;

input{
    background: transparent;
    border: none;
}

}`;
