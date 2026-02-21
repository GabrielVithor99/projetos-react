import React from 'react'
import { styled } from 'styled-components'
import { Button } from '../Button';
import {
    HeaderContainer,
    Row,
    Column,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input,
    Logo
} from './styles'
import { useNavigation } from '../../hooks/useNavigation';

export const Header = ({isLogged}) => {

    const { goToHome, goToLogin, goToCadastro } = useNavigation();
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <Logo src={'https://assets.dio.me/VTgUqMiPAIgvsFdSvgSnVAB5lrqnNxY_N8h8LknnQys/f:webp/q:80/w:120/L2Fzc2V0cy9kaW9tZS9sb2dvLWZ1bGwuc3Zn'} alt='Logo da dio' onClick={goToHome}/>
                {isLogged ? (
                    <>
                        <SearchInputContainer>
                        <Input placeholder='Buscar...'/>
                        </SearchInputContainer>
                        <Menu href='https://auth.dio.me/'>Live Code</Menu>
                        <Menu href='#'>Global</Menu>
                    </>
                ): null}
                
                </Row>
                <Row>   
                    {isLogged ? (
                        <>
                        <UserPicture></UserPicture>
                        </>
                    ): (
                        <>
                            <MenuRight>
                            <Button title="Home" onClick={goToHome}/>
                            <Button title="Entrar" onClick={goToLogin}/>
                            <Button title="Cadastrar" onClick={goToCadastro}/>
                            </MenuRight>
                        </>
                       ) }
                </Row>
        </HeaderContainer>
    </Wrapper>
            
  )
}
