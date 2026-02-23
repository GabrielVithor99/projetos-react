import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');
  const goToLogin = () => navigate('/login');
  const goToCadastro = () => navigate('/cadastro');
  const goToFeed = () => navigate('/feed');

  return {
    goToHome,
    goToLogin,
    goToCadastro,
    goToFeed,
  };
};
