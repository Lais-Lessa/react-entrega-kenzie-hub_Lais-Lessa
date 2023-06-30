import React, { useContext } from "react";
import { StyledItemTech } from "../StyledTech/StyledItemTech";
import { StyledListTech } from "../StyledTech/StyledListTech";
import { UserContext } from "../../../../../providers/User/UserContext";
import { TechContext } from "../../../../../providers/TechContext";

const TechList = () => {
  const { user, setIsOpenEditModal } = useContext(UserContext);
  const listTech = user.techs;
  const { setTech } = useContext(TechContext);
  
  const handleEditModal = (item) => {
    setTech(item);
    setIsOpenEditModal(true);
  };

  return (
    <StyledListTech>
      {listTech.map((item, index) => (
        <StyledItemTech key={index} onClick={() => handleEditModal(item)}>
          <div>
            <h3>{item.title}</h3>
            <span>{item.status}</span>
          </div>
        </StyledItemTech>
      ))}
    </StyledListTech>
  );
};

export default TechList;
