import React from "react";
import TechList from "./TechList/TechList";
import { StyledSectionContainer } from "./StyledTech/StyledSectionContainer";

export const TechSection = () => {
  return (
    <StyledSectionContainer>
      <TechList />
    </StyledSectionContainer>
  );
};
