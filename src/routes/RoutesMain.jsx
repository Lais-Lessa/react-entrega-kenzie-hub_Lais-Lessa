import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import { ContextProvider } from "../components/User/UserContext";

export const RoutesMain = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </ContextProvider>
  );
};
