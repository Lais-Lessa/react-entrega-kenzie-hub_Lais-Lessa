import { ToastContainer } from "react-toastify";
import { Form } from "../../components/Form/form";
import { Header } from "../../components/Header/Header";

export const Register = () => {
  return (
    <>
      <Header mode={"register"} />
      <ToastContainer />
      <Form />
    </>
  );
};
