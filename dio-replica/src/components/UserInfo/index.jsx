import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';

import{
    UserInforContainer,
    UserPicture,
    NameText,
    Progress
} from "./styles";

export const UserInfo = ({name,image,percentual}) => {
  return (
    <UserInforContainer>
        <UserPicture src={image}/>
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </UserInforContainer>
  )
}
