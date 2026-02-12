import { ItemRepoContainer } from './styles'
export const ItemRepo = ({repo, handleRemoveRepository}) => {

    const handleRemove = () => {
        // Lógica para remover o repositório
        handleRemoveRepository(repo.id);
    }
  return (
    <ItemRepoContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositorio</a>
      <a href="#" className='remove' onClick={handleRemove}>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}
