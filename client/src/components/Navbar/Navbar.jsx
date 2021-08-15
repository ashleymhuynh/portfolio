import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { verifyAdmin } from "../../services/admin";
import { logout } from "../../services/admin";
// import "./Navbar.css";

const Navbar = (props) => {
  const [adminVerified, setAdminVerified] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  const logoutAdmin = async () => {
    await logout();
    setTimeout(() => {
      history.push("/home");
    }, 200);
  };

  return (
    <div className="Navbar">
      <NavLink className="logo" to="/home">
        <img
          id="logo"
          src={"https://i.imgur.com/WiQW8w6.png"}
          alt="logo"
          width="200"
        />
      </NavLink>
      <div className="menu">
        <NavLink className="link" to="/projects">
          Projects
        </NavLink>

        <NavLink className="link" to="/blog">
          Bleeding Ink
        </NavLink>

        <NavLink className="link" to="/biography">
          Biography
        </NavLink>

        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
        {adminVerified ? (
          <>
            <NavLink className="link" to="/dashboard">
              Dashboard
            </NavLink>
            <span onClick={logoutAdmin}>Logout</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
