import { FormProvider, useForm } from "react-hook-form";
import { StyledSubmitBtn } from "../Form/StyledSubmitBtn";
import { Input } from "../Input/Input";
import { SelectComponent } from "../Select/selectComponent";
import { StyledModalForm } from "./StyledModalForm";
import { api } from "../../pages/services/Api";
import { useContext } from "react";
import { UserContext } from "../../../providers/User/UserContext";
import { StyledButtonWrapper } from "../../pages/HomePage/TechSection/StyledTech/StyledButtonWrapper";
import { TechContext } from "../../../providers/TechContext";
import { toast } from "react-toastify";

export const ModalForm = () => {
  const methods = useForm();
  const { handleSubmit, register } = methods;
  const { setIsOpenModal, updateUser, setIsOpenEditModal, isOpenEditModal } =
    useContext(UserContext);
  const { tech, setTech } = useContext(TechContext);

  const onSubmit = async (formData) => {
    const { status } = formData;
    try {
      if (isOpenEditModal) {
        await api.put(`/users/techs/${tech.id}`, { status });
        toast.info(`Você atualizou o status de ${tech.title}`, {
          autoClose: 950,
        });
        setIsOpenEditModal(false);
      } else {
        await api.post("/users/techs", formData);
        setIsOpenModal(false);
        toast.success(
          `A tecnologia ${formData.title} foi cadastrada com sucesso!`,
          {
            autoClose: 950,
          }
        );
      }
      const response = await api.get("/profile");
      const data = response.data;
      updateUser(data);
      setTech(data.techs)
    } catch (error) {
      toast.error("Ops! algo deu errado...", {
        autoClose: 950,
      });
      throw new Error("Erro na requisição: " + error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/users/techs/${tech.id}`);
      toast.error(`Você removeu a tecnologia ${tech.title}`, {
        autoClose: 950,
      });
      setIsOpenEditModal(false);
      const { data } = await api.get("/profile");
      updateUser(data);
      setTech(data.techs)
    } catch (error) {
      throw new Error("Erro na requisição: " + error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={"text"}
          label={"Nome"}
          register={register("title")}
          disabled={isOpenEditModal ? true : false}
          placeholder={isOpenEditModal ? tech.title : "Digite o título da tecnologia"}
        />
        <SelectComponent
          label={"Selecionar status"}
          options={["Iniciante", "Intermediário", "Avançado"]}
          register={register("status")}
        />
        {isOpenEditModal ? (
          <StyledButtonWrapper>
            <StyledSubmitBtn type="submit" mode={"secondaryDisabled"}>
              Salvar alterações
            </StyledSubmitBtn>
            <StyledSubmitBtn
              type="button"
              mode={"secondary"}
              onClick={handleDelete}
            >
              Excluir
            </StyledSubmitBtn>
          </StyledButtonWrapper>
        ) : (
          <StyledSubmitBtn type="submit" mode={"primary"}>
            Cadastrar Tecnologia
          </StyledSubmitBtn>
        )}
      </StyledModalForm>
    </FormProvider>
  );
};
