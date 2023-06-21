import React from "react";
import { StyledFieldset } from "./StyledFieldset";

export const Input = ({ type, label, register, ...rest}) => {
  return (
    <StyledFieldset>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} {...register} {...rest}/>
    </StyledFieldset>
  );
};
