import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="Footer">
      <Link
        className="footer-link"
        to="/login"
        style={{ textDecoration: "none" }}
      >
        Ashley Huynh ©
      </Link>
    </div>
  );
};

export default Footer;
