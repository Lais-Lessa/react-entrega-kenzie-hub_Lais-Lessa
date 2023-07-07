import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./User/UserContext";
import { api } from "../pages/services/Api";

export const TechContext = createContext();

export const ProviderTech = ({ children }) => {

  const { setIsOpenEditModal, updateUser } = useContext(UserContext);

  const [tech, setTech] = useState([]);

  const handleDelete = async () => {

    try {
      await api.delete(`/users/techs/${tech.id}`);
      toast.error(`Você removeu a tecnologia ${tech.title}`, {
        autoClose: 950,
      });
      setIsOpenEditModal(false);
      const { data } = await api.get("/profile");
      updateUser(data);
      setTech(data.techs);
      
    } catch (error) {
      throw new Error("Erro na requisição: " + error.message);
    }
  };

  return (
    <TechContext.Provider value={{ tech, setTech, handleDelete }}>
      {children}
    </TechContext.Provider>
  );
};
