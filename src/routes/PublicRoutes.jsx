import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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
