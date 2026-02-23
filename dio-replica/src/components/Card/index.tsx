import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';
import{
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles";

import FeedBackground from '../../assets/background-feed.png';
import ProfileImage from "../../assets/profile.png";

export const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={FeedBackground}/>
        <Content>
            <UserInfo>
                <UserPicture src={ProfileImage}/>
                <div>
                    <h4>
                        Gabriel Mota
                    </h4>
                    <p>
                        há 10 minitos
                    </p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>
                    Projeto para curso de React JS
                </h4>

                <p>
                    Projeto feito para a formação React JS na dio <strong>Saiba Mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>
                    #React JS, #Css, #Javascript
                </h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
