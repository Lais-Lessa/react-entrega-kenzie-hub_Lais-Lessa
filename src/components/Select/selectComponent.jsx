import React from "react";
import { StyledFieldset } from "../Input/StyledFieldset";

export const SelectComponent = ({ label, options, register }) => {
  return (
    <StyledFieldset>
      <label htmlFor={label}>{label}</label>
      <select name="select" id="label" {...register}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledFieldset>
  );
};
