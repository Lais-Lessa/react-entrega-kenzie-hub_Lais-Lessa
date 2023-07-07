import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../pages/services/Api";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);


  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const updateUser = (data) => {
    setUser(data);
  };

  const navigate = useNavigate();

  const onSubmit = async (formData) => {

    try {
      const response = await api.post("/sessions", formData);
      updateUser(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login efetuado", {
        autoClose: 600,
      });
      setToastStatus(true);
    } catch (error) {
      toast.error("Ops! algo deu errado", {
        autoClose: 600,
      });
    }
  };

  useEffect(() => {
    if (toastStatus) {
      const timeout = setTimeout(() => {
        setToastStatus(false);
        navigate("/HomePage");
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [toastStatus]);


  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        isOpenModal,
        setIsOpenModal,
        isOpenEditModal,
        setIsOpenEditModal,
        showPass,
        handleShowPass,
        onSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, ContextProvider };
