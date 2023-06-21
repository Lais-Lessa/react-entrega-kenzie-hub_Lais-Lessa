import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { StyledIcon } from "../../styles/StyledIcon";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { StyledIconWrapper } from "../../styles/StyledIconWrapper";
import { StyledForm } from "../../components/Form/StyledForm";
import { StyledHeader } from "../../components/Header/StyledHeader";
import { StyledAnchor } from "../../components/Button/StyledButton";
import { StyledSubmitBtn } from "../../components/Form/StyledSubmitBtn";
import { loginSchema } from "../../schemas/loginSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/User/UserContext";
import { api } from "../services/Api";
import { StyledToasty } from "../../styles/StyledToasty";
import { Input } from "../../components/Input/Input";

export const Login = () => {
  const [toastStatus, setToastStatus] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { updateUser } = useContext(UserContext);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      updateUser(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login efetuado", {
        autoClose: 600,
      });
      setToastStatus(true);
    } catch (error) {
      toast.error("Ops! algo deu errado", {
        autoClose: 600,
      });
    }
  };

  
  useEffect(() => {
    if (toastStatus) {
      const timeout = setTimeout(() => {
        setToastStatus(false);
        navigate("/HomePage");
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [toastStatus]);

  return (
    <>
      <StyledHeader>
        <img src="/Logo.svg" alt="Logotipo Kenziehub" />
      </StyledHeader>
      <StyledToasty />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <Input
          type={"email"}
          label={"E-mail"}
          register={register("email")}
          placeholder={"Digite aqui seu e-mail"}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <StyledIconWrapper>
          <Input
            type={showPass ? "text" : "password"}
            label={"Senha"}
            register={register("password")}
            placeholder={"Digite aqui sua senha"}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <StyledIcon
            onClick={handleShowPass}
            icon={showPass ? faEye : faEyeSlash}
          />
        </StyledIconWrapper>
        <StyledSubmitBtn mode={"primary"} type="submit">
          Entrar
        </StyledSubmitBtn>
        <h3>Ainda não possui uma conta?</h3>
        <StyledAnchor to={"/Register"} mode={"secondary"} type="button">
          Cadastre-se
        </StyledAnchor>
      </StyledForm>
    </>
  );
};
