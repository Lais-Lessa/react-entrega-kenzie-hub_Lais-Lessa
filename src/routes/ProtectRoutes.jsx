import { useContext, useEffect } from "react"
import { UserContext } from "../components/User/UserContext"
import { Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../pages/services/Api"

export const ProtectRoutes = () => {
    const { user, updateUser  } = useContext(UserContext)
    const navigate = useNavigate()
    const token = localStorage.getItem("@TOKEN")

    useEffect(() => {

        const checkUser = async () =>{
            if(!user){
                try{
                    const { data } = await api.get('/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    updateUser(data)
                }catch (error){
                    navigate("/")
                    toast.error("Usúario não autorizado",{
                        autoClose: 800,
                    })
                }
            }
        }

        checkUser()
    }, [])

    if(!user){
        return (
            <div> 
                <span>Carregando...</span>
            </div>
        )
    }

    return <Outlet/>
}