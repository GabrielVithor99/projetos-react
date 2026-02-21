import React from 'react'
import {Controller} from 'react-hook-form';
import {InputContainer,InputText,IconContainer, ErrorText} from './styles';

export const Input = ({ icon,control, name, errorMessage, ...rest }) =>  {
  return (
    <>
    <InputContainer>
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Controller 
        name={name} 
        control={control} 
        rules={{required:true}} 
        render={({field}) =>   <InputText {...field} {...rest} />}/>
    </InputContainer>
    {errorMessage ?<ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}