import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';

import{
    UserInforContainer,
    UserPicture,
    NameText,
    Progress
} from "./styles";
import { IUserInfoProps } from './types';

export const UserInfo: React.FC<IUserInfoProps> = ({name,image,percentual}) => {
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
