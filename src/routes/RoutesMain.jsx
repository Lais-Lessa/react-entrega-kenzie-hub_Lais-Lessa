import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { Register } from "../pages/Register/register";
import { ContextProvider } from "../../providers/User/UserContext";
import { Login } from "../pages/Login/login";
import { ProtectRoutes } from "./ProtectRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ProviderTech } from "../../providers/TechContext";

export const RoutesMain = () => {
  return (
    <ContextProvider>
      <ProviderTech>
        <Routes>
          <Route element={<ProtectRoutes />}>
            <Route index path="/HomePage" element={<HomePage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/Register" element={<Register />} />
            <Route index path="/" element={<Login />} />
          </Route>
        </Routes>
      </ProviderTech>
    </ContextProvider>
  );
};
