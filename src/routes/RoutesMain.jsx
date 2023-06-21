import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { Register } from "../pages/Register/register";
import { ContextProvider } from "../components/User/UserContext";
import { Login } from "../pages/Login/login";
import { ProtectRoutes } from "./ProtectRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {

  return (
    <ContextProvider>
      <Routes>
        <Route element={<ProtectRoutes/>}>
        <Route path="/HomePage" element={<HomePage />} />
        </Route>
        <Route element={<PublicRoutes/>}>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
};
