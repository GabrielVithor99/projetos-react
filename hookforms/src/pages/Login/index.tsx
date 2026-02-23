import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    nome: yup
    .string()
    .min(3, "Minimo de 3 caracteres")
    .required("Campo obrigatório"),
    email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IFormLogin) =>{
      alert(`Login efetuado com sucesso!\nSeja bem-vindo ${data.nome}`)
  } 

  return (
    <Container>
      <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column>
            <Title>Login</Title>
            <Spacing />
            <Input
              name="nome"
              placeholder="Nome de usuario"
              control={control}
              errorMessage={errors?.nome?.message}
            />
            <Spacing />
            <Input
              name="email"
              placeholder="Email"
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Spacing />
            <Button  title={"Login"} isValid={isValid}></Button>
          </Column>
        </form>
       
      </LoginContainer>
    </Container>
  );
};

export default Login;
