import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { verifyAdmin } from "../../services/admin";
import { logout } from "../../services/admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = (props) => {
  const [adminVerified, setAdminVerified] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
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
      <FontAwesomeIcon
        className={showMenu ? `fa-times` : `fa-bars `}
        icon={showMenu ? faTimes : faBars}
        size="2x"
        style={{ color: "#F7C143" }}
        onClick={() => setShowMenu(!showMenu)}
      />

      <NavLink className="logo-container" to="/home">
        <img
          id="navbar-logo"
          src={"https://i.imgur.com/WiQW8w6.png"}
          alt="logo"
        />
      </NavLink>
      <nav className="navbar">
        <div className="navbar-menu">
          {showMenu ? (
            <div className="mobile-navbar-right-container">
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
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
