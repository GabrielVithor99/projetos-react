import { ButtonContainer } from "./styles";

const Button = ({label, onclick}) => {
  return (
    <ButtonContainer label={label} onClick={onclick}>
    </ButtonContainer>
  );
}

export default Button;
