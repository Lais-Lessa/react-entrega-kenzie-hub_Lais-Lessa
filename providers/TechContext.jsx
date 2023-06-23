import { createContext, useContext, useState } from "react";

export const TechContext = createContext();

export const ProviderTech = ({ children }) => {
  const [tech, setTech] = useState([]);

  function selectTech(data) {
    setTech(data);
  }

  return (
    <TechContext.Provider value={{ tech, setTech }}>
      {children}
    </TechContext.Provider>
  );
};
