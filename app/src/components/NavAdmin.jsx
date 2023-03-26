import '../styles/ComponentsStyles/NavAdmin.scss';
import { useSelector } from 'react-redux';

const NavAdmin = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('pt-BR', options);
  const user = useSelector(state => state.user.name)
  return (
    <div className="navAdmin">
      
    <div>
      <h1>{`Bem-vindo, ${user}`}</h1>
      <p>{date}</p>
    </div>
    

  
    <div>
      <p>Lupa</p>
      <div>Email</div>
      <div>Foto</div>
    </div>
    
    </div>
  )
}

export default NavAdmin