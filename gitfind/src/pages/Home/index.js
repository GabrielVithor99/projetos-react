import {useState} from 'react';
import {Header} from '../../components/Header';
import background from '../../assets/gtihub-background.jpg';
import { ItemList } from '../../components/ItemList'; 

function App(){
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async() => {
    const userResponse = await fetch(`https://api.github.com/users/${user}`);
    const userData = await userResponse.json();

    if(userData.login){
      const {avatar_url,login,bio,name} = userData;
      setCurrentUser({avatar_url,login,bio,name});

      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos`);
      const reposData = await reposResponse.json();

      if(reposData.length){
        setRepos(reposData);
      }
    }

    console.log(userData);
    console.log(repos);
  }
  return(
    <div className='App'>
      <Header />
      <div className='content'>
        <img src={background} className='background' alt='Background' />
        <div className='layer'></div>
        <div className='info'>
         <input nome="username" value={user} onChange={e => setUser(e.target.value)} placeholder="@username"/>
         <button onClick={handleGetData}>Pesquisar</button>
         </div>
         {currentUser?.login ? (
          <>
          <div className='profile'>
          <img src={currentUser.avatar_url} alt="Foto de perfil" className='profilePhoto'/>
          <div>
            <h3>
              {currentUser.name || currentUser.login}
            </h3>
            <span>
              @{currentUser.login}
            </span>
            <p>
            {currentUser.bio}
            </p>
          </div>
         </div>
          <hr/>
         </>
        ): null}
         
        {repos?.length ? (
          <>
         <div className='repositories'>
          <h4>Repositórios</h4>
          {repos.map(repo => (
            <ItemList title={repo.name} description={repo.description} />
          ))}
         </div>
         </>
        ):null}
        
      </div>
    </div>  
  )
}
export default App;