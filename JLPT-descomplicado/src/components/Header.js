import { useHistory } from 'react-router-dom';
import logoJLPT from '../images/logo-header-site.png';

export default function Header() {
  const history = useHistory();

  return (
    <div className='header-container'>
      <img src={logoJLPT} alt="logo JLPT descomplicado" />
    </div>
  )
}