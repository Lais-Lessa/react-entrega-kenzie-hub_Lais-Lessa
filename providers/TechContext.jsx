import { createContext, useContext, useState } from "react";
import { api } from "../src/pages/services/Api";
import { toast } from "react-toastify";
import { UserContext } from "./User/UserContext";

export const TechContext = createContext();

export const ProviderTech = ({ children }) => {
  const [tech, setTech] = useState([]);
  const { setIsOpenEditModal, updateUser } = useContext(UserContext)
  const handleDelete = async () => {
    try {
      await api.delete(`/users/techs/${tech.id}`);
      toast.error(`Você removeu a tecnologia ${tech.title}`, {
        autoClose: 950,
      });
      setIsOpenEditModal(false);
      const { data } = await api.get("/profile");
      updateUser(data);
      setTech(data.techs)
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
