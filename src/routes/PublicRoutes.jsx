import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PublicRoutes = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(()=>{
  
    const isAuth = () =>{
      if(token){
        navigate("/HomePage")
      }
    }
    isAuth()

  }, [token])

  if (token) {
    return (
      <div>
        <span>Carregando...</span>
      </div>
    );
  }
  return <Outlet />;
};
