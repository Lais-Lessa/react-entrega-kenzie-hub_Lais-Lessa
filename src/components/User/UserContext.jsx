import React, { createContext, useState } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const updateUser = (data) => {
    setUser(data);
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, ContextProvider };
