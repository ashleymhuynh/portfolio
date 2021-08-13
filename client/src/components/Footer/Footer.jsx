import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { verifyAdmin } from "../../services/admin";
import { logout } from "../../services/admin";

const Footer = (props) => {
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
    const confirmedlogout = await logout();
    setTimeout(() => {
      history.push("/home");
    }, 200);
  };

  return (
    <div className="Footer">
      <Link className="link" to="/login">
        Ashley Huynh
      </Link>
      {adminVerified ? (
        <>
          <button className="sign-out" onClick={logoutAdmin}>
            LogOut
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Footer;
