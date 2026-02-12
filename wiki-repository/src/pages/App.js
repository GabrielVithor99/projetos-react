import gitlogo from '../assets/gitlogo.png';
import { Container } from './styles';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Button } from '../components/Button';
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');

  const[repository , setRepository] = useState([]);

  const handleRemoveRepository = (id) => {
    setRepository(prev => prev.filter(repo => repo.id !== id));
  } 

  const handleSearchRepository = async (e) => {
    try{
      const  {data} = await api.get(`/${currentRepo}`);
      if(!currentRepo){
        alert('Digite o nome do repositório');
        return;
      }
      if(repository.find(repo => repo.id === data.id)){
        alert('Repositório já adicionado');
        return;
      }
      if(data.id){
        setRepository(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }catch(error){
      alert('Repositório não encontrado');
    }
  }


  return (
    <Container>
        <img src={gitlogo} width={72} height={72} alt='Gitlogo'/>
        <Input placeholder="Digite o nome do repositório" type="text" value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepository} />
          {repository.map(repo => <ItemRepo repo={repo} handleRemoveRepository={handleRemoveRepository} />)}
        
    </Container>
  );
}

export default App;
