import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar admin={props.admin} />
      <div className="children-layout">{props.children}</div>
      <br />
      <Footer adminVerified={props.adminVerified} />
    </div>
  );
};

export default Layout;
