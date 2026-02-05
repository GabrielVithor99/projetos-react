
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content } from './styles';
import { useState } from 'react';


function App() {
  const [CurrentNumber, setCurrentNumber] = useState("0");

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == "0" ? "" : prev}${number}`);
  }

  const handleClear = () => {
    setCurrentNumber("0");
  }

  const resultado = () => {
    try {
      setCurrentNumber(eval(CurrentNumber).toString());
    } catch {
      setCurrentNumber("Erro");
    }
  }
  return (
     <Container>
      <Content>
        <Input value={CurrentNumber}/>
        <Button label="C" onclick={() =>handleClear()}/>
        <Button label="+" onclick={() => handleAddNumber("+")}/>
        <Button label="-" onclick={() => handleAddNumber("-")}/>
        <Button label="*" onclick={() => handleAddNumber("*")}/>
        <Button label="7" onclick={() => handleAddNumber("7")}/>
        <Button label="8" onclick={() => handleAddNumber("8")}/>
        <Button label="9" onclick={() => handleAddNumber("9")}/>
        <Button label="/" onclick={() => handleAddNumber("/")}/>
        <Button label="4" onclick={() => handleAddNumber("4")}/>
        <Button label="5" onclick={() => handleAddNumber("5")}/>
        <Button label="6" onclick={() => handleAddNumber("6")}/>
        <Button label="=" onclick={() => resultado()}/>
        <Button label="1" onclick={() => handleAddNumber("1")}/>
        <Button label="2" onclick={() => handleAddNumber("2")}/>
        <Button label="3" onclick={() => handleAddNumber("3")}/>
        <Button label="0" onclick={() => handleAddNumber("0")}/>
      </Content>
     </Container>
  );
}

export default App;
