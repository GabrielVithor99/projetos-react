import { Form } from "react-hook-form";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";
import { JSX } from "react";

const  Button = ({ title, onClick, isValid, ...rest }: IButtonProps): JSX.Element => {
  return (
    <ButtonContainer 
    onClick={onClick} 
    disabled={!isValid}
    {...rest}
    >
      {title}
    </ButtonContainer>)
};

export default Button;
