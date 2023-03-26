import NavAdmin from "../components/NavAdmin"
import Sidebar from "../components/SiderbarAdmin"
import CreateForm from "../components/CreateForm"
import '../styles/PagesStyles/Update.scss';

const Create = () => {
  return (
  <div className="welcome">
    <div className="sidebarAdmin">
      <Sidebar />
    </div>
    <div className="columnWelcome">
      <NavAdmin />
      <CreateForm />
    </div>
  </div>
)}

export default Create