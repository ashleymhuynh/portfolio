import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../services/admin";

const Logout = () => {
  const [isLoggedout, setIsLoggedOut] = useState(false);
  useEffect(() => {
    const logoutAdmin = async () => {
      const logoutBool = await logout();
      setIsLoggedOut(logoutBool);
    };
    logoutAdmin();
  }, []);
  return isLoggedout ? <Redirect to="/home" /> : <div />;
};

export default Logout;
