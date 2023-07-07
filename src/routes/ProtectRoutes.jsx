import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { api } from "../pages/services/Api";
import { UserContext } from "../providers/User/UserContext";
import { TechContext } from "../providers/TechContext";

export const ProtectRoutes = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
const { setTech } = useContext(TechContext)
  
  useEffect(() => {
    const checkUser = async () => {
      if(!user){
        try{
        const { data } =  await api.get("/profile")
        setTech(data.techs)
        updateUser(data)
        }catch{
          navigate("/")
          localStorage.removeItem("@TOKEN")
        }
      }
    };

    checkUser();
  }, []);

  if (!user) {
    return (
      <div>
        <span>Carregando...</span>
      </div>
    );
  }

  return <Outlet />; 
};
