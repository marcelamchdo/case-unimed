import unimed from '../images/logo_unimed.png';
import '../styles/SidebarAdmin.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src={unimed} className="unimed" alt="background"/>

    <div>
      <ul>
        <li><Link to= "/welcome">Home</Link></li>
        <li><Link to= "/admin">Usuários</Link></li>
        <li><Link to= "/">Sair</Link></li>
      </ul>
    </div>

    <div>
      <p>Suporte</p>
    </div>

    </div>
  )
}

export default Sidebar