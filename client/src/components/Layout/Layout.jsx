import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar user={props.admin} />
      <div className="children-layout">{props.children}</div>
    </div>
  );
};

export default Layout;
