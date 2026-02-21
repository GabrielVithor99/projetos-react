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
  ForgetText,
  CreateText,
 } from './styles';

export const Login = () => {

    const { goToFeed, goToCadastro } = useNavigation();

  const schema = yup.object({
    email: yup.string().email('Email invalidado').required('Campo obrigatorio'),
    password: yup.string().min(3,'No minimo 3 caracteres').required('Campo obrigatorio')
  }).required();

  const {control, handleSubmit, formState: {errors,isValid}} = useForm({
    resolver: yupResolver(schema),
    mode:'onChange',
  });

  console.log(isValid, errors)

  const onSubmit = async formdata => {
    try{
      const email = formdata.email.trim();
      const password = formdata.password.trim();
      
      
      // Busca o usuário por email
      const response = await api.get(`/users?email=${email}`);
         
      if(response.data && response.data.length === 1){
        const user = response.data[0];        
        if(user.senha === password){
          goToFeed();
        }else{
          alert('Email ou senha inválido');
        }
      }else{
        alert('Email ou senha inválido');
      }
    }catch(e){
      alert("Houve um erro tente novamente: "+e.message);
    }
  }

  return (
    <>
    <Header />
        <Container>
          <Column>
            <Title><TitleHighlight>Implemente</TitleHighlight> o seu futuro global agora!</Title>
            </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} errorMessage={errors.email?.message || ''} name="email" type="email" placeholder="E-mail" />
                <Input control={control} errorMessage={errors.password?.message || ''} name="password" type="password" placeholder="Senha" />
                <Button title="Entrar" variant="secondary" type="submit" />
                <Row>
                    <ForgetText>Esqueci minha senha</ForgetText>
                    <CreateText onClick={goToCadastro}>Crie sua conta</CreateText>
                </Row>
              </form>
            </Wrapper>
            </Column>
            </Container>
           </>  
  )
}
