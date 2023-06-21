import { useContext, useEffect } from "react"
import { UserContext } from "../components/User/UserContext"
import { Outlet, useNavigate } from "react-router-dom";

export const PublicRoutes = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("@TOKEN")

    useEffect(()=>{
        if(token){
            navigate("/HomePage")
        }
    },[token])

    if(token){
        return (
            <div>
                <span>Carregando...</span>
            </div>
        )
    }
    return <Outlet/>

}
