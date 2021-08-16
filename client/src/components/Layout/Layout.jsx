import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar admin={props.admin} />
      <div className="children-layout">{props.children}</div>
      <Footer adminVerified={props.adminVerified} />
    </div>
  );
};

export default Layout;
