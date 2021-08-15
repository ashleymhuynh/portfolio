import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="Footer">
      <Link className="link" to="/login">
        Ashley Huynh
      </Link>
    </div>
  );
};

export default Footer;
