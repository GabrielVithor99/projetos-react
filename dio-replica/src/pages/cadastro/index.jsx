import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '../../services/api';
import { useNavigation } from '../../hooks/useNavigation';

import {Container,
  Title,  
  TitleHighlight,
  Wrapper,
  Column,
  Row,
  TitleLogin,
  SubtitleLogin,
  Content,
  ContentHighLight,
  LoginText,
  LoginLink
 } from './styles';

export const Cadastro = () => {

  const { goToFeed, goToLogin } = useNavigation();

  const schema = yup.object({
    email: yup.string().email('Email invalidado').required('Campo obrigatorio'),
    password: yup.string().min(3,'No minimo 3 caracteres').required('Campo obrigatorio'),
    nome : yup.string().min(3,"No minimo 3 caracteres").required('Campo obrigatório!')
  }).required();

  const {control, handleSubmit, formState: {errors,isValid}} = useForm({
    resolver: yupResolver(schema),
    mode:'onChange',
  });

  console.log(isValid, errors)

  const onSubmit = async formdata => {
    try{
      // Remove espaços e loga os dados
      const email = formdata.email.trim();
      const nome = formdata.nome.trim();
      const password = formdata.password.trim();
      
      // Verifica se já existe um usuário com o mesmo e-mail
      const response = await api.get(`/users?email=${email}`);
      console.log('GET /users response', response);

      if(response.data && response.data.length > 0){
        alert('Email ja cadastrado');
        return;
      }

      // monta o objeto que será salvo no db.json
      const newUser = {
        name: nome,
        email: email,
        senha: password
      };

      console.log('Novo usuário:', newUser);

      // envia POST para json-server; ele adiciona o id automaticamente
      await api.post('/users', newUser);

      // redireciona para o feed quando tudo der certo
      goToFeed();
    }catch(e){
      alert("Houve um erro tente novamente: " + e.message);
    }
  }

  return (
    <>
    <Header />
        <Container>
          <Column>
            <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} errorMessage={errors.nome?.message || ''} name="nome" type="text" placeholder="Nome Completo" />
                <Input control={control} errorMessage={errors.email?.message || ''} name="email" type="email" placeholder="E-mail" />
                <Input control={control} errorMessage={errors.password?.message || ''} name="password" type="password" placeholder="Senha" />
                <Button title="Criar minha conta" variant="secondary" type="submit" />
              </form>
            </Wrapper>
              <Content>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
              </Content>
                <Content><LoginText>Já tenho conta.</LoginText><LoginLink onClick={goToLogin}>Fazer login</LoginLink></Content>
            </Column>
            </Container>
           </>  
  )
}
