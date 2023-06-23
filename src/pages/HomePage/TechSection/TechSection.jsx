import React from "react";
import TechList from "./TechList/TechList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledSectionContainer } from "./StyledTech/StyledSectionContainer";
import { StyledPlusIcon } from "../../../styles/StyledIcon";

export const TechSection = () => {
  return (
    <StyledSectionContainer>
      <TechList />
    </StyledSectionContainer>
  );
};
