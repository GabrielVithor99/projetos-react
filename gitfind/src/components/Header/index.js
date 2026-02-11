import './styles.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>GitFind</h1>
      <nav className='nav'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
    </header>
  )
}

export {Header};