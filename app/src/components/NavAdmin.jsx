import '../styles/ComponentsStyles/NavAdmin.scss';
import { useSelector } from 'react-redux';
import perfil from '../images/perfil.png';

const NavAdmin = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('pt-BR', options);
  const user = useSelector(state => state.user.name)
  return (
    <div className="navAdmin">
      
    <div className='welcomeText'>
      <h1>{`Bem-vindo, ${user}`}</h1>
      <p>{date}</p>
    </div>
  
    <div className="icons">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>

      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </div>
      <div>
      <img src={perfil} className="perfil" alt="perfil"/>
      </div>
    </div>
    
    </div>
  )
}

export default NavAdmin