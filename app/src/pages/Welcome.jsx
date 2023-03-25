import Sidebar from "../components/SiderbarAdmin";
import NavAdmin from "../components/NavAdmin";
import '../styles/Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <Sidebar />
      <NavAdmin />
    </div>
  )
}

export default Welcome;