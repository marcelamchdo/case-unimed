import NavAdmin from "../components/NavAdmin"
import Sidebar from "../components/SiderbarAdmin"
import UpdateForm from "../components/UpdateForm"
import '../styles/PagesStyles/Update.scss';

const Update = () => {
  return (
  <div className="welcome">
    <div className="sidebarAdmin">
      <Sidebar />
    </div>
    <div className="columnWelcome">
      <NavAdmin />
      <UpdateForm />
    </div>
  </div>
)}

export default Update