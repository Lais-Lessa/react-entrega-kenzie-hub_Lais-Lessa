import React from "react";
import { StyledFieldset } from "./StyledFieldset";

export const Input = ({ type, label, register }) => {
  return (
    <StyledFieldset>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} {...register} />
    </StyledFieldset>
  );
};
