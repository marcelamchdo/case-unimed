import Sidebar from "../components/SiderbarAdmin";
import NavAdmin from "../components/NavAdmin";
import '../styles/PagesStyles/Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="sidebarAdmin">
        <Sidebar />
      </div>
      <div className="columnWelcome">
        <NavAdmin />
        <div className="textPage">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida semper malesuada. Praesent sagittis magna 
    purus, id porta risus vehicula ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
    himenaeos. Nullam eros ipsum, gravida in semper euismod, fringilla vel purus. Integer et fermentum felis. 

    Proin tempor viverra mauris vel fermentum. Duis et leo nec neque rutrum imperdiet at a ante. Aliquam eros elit, 
    iaculis et tincidunt a, mattis in dolor. Aliquam erat volutpat. Nullam vel enim lacus. Nullam ac mi dictum, 
    venenatis tellus at, rutrum eros. Vivamus nisi tellus, auctor nec feugiat ac, finibus sit amet lorem. Sed lacinia 
    ipsum sit amet odio finibus suscipit. Nam mattis urna in leo efficitur, ut dapibus massa lobortis. </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome;