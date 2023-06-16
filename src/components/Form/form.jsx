import React, { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { StyledForm } from "./StyledForm";
import { SelectComponent } from "../Select/selectComponent";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { registerSchema } from "../../schemas/schemas";
import { StyledSubmitBtn } from "./StyledSubmitBtn";
import { api } from "../../pages/services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [toastStatus, setToastStatus] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso", {
        autoClose: 600,
      });
      setToastStatus(true);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 600,
      });
    } finally {
      reset();
    }
  };

  useEffect(() => {
    if (toastStatus) {
      const timeout = setTimeout(() => {
        setToastStatus(false);
        navigate("/");
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [toastStatus]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Crie sua conta</h2>
      <h3>Rápido e grátis, vamos nessa</h3>
      <Input
        type={"text"}
        label={"Nome"}
        register={register("name")}
        placeholder={"Digite aqui seu nome"}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <Input
        type={"email"}
        label={"Email"}
        register={register("email")}
        placeholder={"Digite aqui seu email"}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        type={"password"}
        label={"Senha"}
        register={register("password")}
        placeholder={"Digite aqui sua senha"}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <Input
        type={"password"}
        label={"Confirmar Senha"}
        register={register("passwordConfirm")}
        placeholder={"Digite novamente sua senha"}
      />
      {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      <Input
        type={"text"}
        label={"Bio"}
        register={register("bio")}
        placeholder={"Fale sobre você"}
      />
      {errors.bio && <p>{errors.bio.message}</p>}
      <Input
        type={"text"}
        label={"Contato"}
        register={register("contact")}
        placeholder={"Opção de contato"}
      />
      {errors.contact && <p>{errors.contact.message}</p>}
      <SelectComponent
        label={"Selecionar módulo"}
        options={[
          "Primeiro módulo (Introdução ao Frontend)",
          "Segundo módulo (Frontend Avançado)",
          "Terceiro módulo (Introdução ao Backend)",
          "Quarto módulo (Backend Avançado)",
        ]}
        register={register("course_module")}
      />
      {errors.course_module && <p>{errors.course_module.message}</p>}
      <StyledSubmitBtn mode={"disabled"} type="submit">
        Cadastrar
      </StyledSubmitBtn>
    </StyledForm>
  );
};
