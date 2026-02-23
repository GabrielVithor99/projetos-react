import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import profileImg from '../../assets/profile.png';
import { Container,Column,Title,TitleHighlight} from './styles';

export const Feed = () => {
  return (
    <>
    <Header  isLogged={true} />
        <Container>
          <Column flex={3}>
          <Title>Feed</Title>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </Column>
          <Column flex={1}>
          <TitleHighlight>#RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={55} name="Gabriel Mota" image={profileImg} />
            <UserInfo percentual={55} name="Gabriel Mota" image={profileImg} />
            <UserInfo percentual={55} name="Gabriel Mota" image={profileImg} />
            <UserInfo percentual={55} name="Gabriel Mota" image={profileImg} />
            <UserInfo percentual={55} name="Gabriel Mota" image={profileImg} />
          </Column>
        </Container>
           </>  
  )
}
