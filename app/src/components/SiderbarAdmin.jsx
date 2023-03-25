import unimed from '../images/logo_unimed.png';
import '../styles/SidebarAdmin.scss';
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src={unimed} className="unimed" alt="background"/>

    <div>
      <ul>
        <li>Home</li>
        <li>Usuários</li>
        <li>Sair</li>
      </ul>
    </div>

    <div>
      <p>Suporte</p>
    </div>

    </div>
  )
}

export default Sidebar