import React, { useContext } from "react";
import { StyledIcon } from "../../styles/StyledIcon";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { StyledIconWrapper } from "../../styles/StyledIconWrapper";
import { StyledForm } from "../../components/Form/StyledForm";
import { StyledHeader } from "../../components/Header/StyledHeader";
import { StyledAnchor } from "../../components/Button/StyledButton";
import { StyledSubmitBtn } from "../../components/Form/StyledSubmitBtn";
import { StyledToasty } from "../../styles/StyledToasty";
import { Input } from "../../components/Input/Input";
import { UserContext } from "../../providers/User/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";

export const Login = () => {

  const { handleShowPass, onSubmit, showPass } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver (loginSchema),
  });

  return (
    <>
      <StyledHeader>
        <img src="/Logo.svg" alt="Logotipo Kenziehub" />
      </StyledHeader>
      <main>
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
      </main>
    </>
  );
};
