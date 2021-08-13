// import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div id="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <NavLink className="link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/blog">
                    Bleeding Ink
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/biography">
                    Biography
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
