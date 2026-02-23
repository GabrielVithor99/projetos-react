import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container,
   Title,
    TitleHighlight,
     TextContent } from './styles';
import Capa from "../../assets/image.png";


export const Home = () => {

  return (
    <>
    <Header />
        <Container>
          <div>
            <Title><TitleHighlight>Implemente</TitleHighlight> o seu futuro global agora!</Title>
            <TextContent>+1.750 cursos, bootcamps, projetos e formações nas carreiras de back-end, front-end, mobile, games, data, inteligência artificial & cloud para elevar o seu nível profissional e conquistar oportunidades nas empresas mais desejadas do mundo</TextContent> <br/>
            <Button title="Começar Agora " variant="secondary" as={Link} to="/login" />
          </div>
          <div>
            <img src={Capa} alt="Imagem de boas vindas" />
          </div>
            </Container>
           </>  
  )
}
