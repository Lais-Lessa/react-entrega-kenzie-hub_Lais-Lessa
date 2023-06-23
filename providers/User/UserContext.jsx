import React, { createContext, useState } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const updateUser = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        isOpenModal,
        setIsOpenModal,
        isOpenEditModal,
        setIsOpenEditModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, ContextProvider };
