import { useState } from "react";
import { login } from "../../services/admin";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Login.css";

const Login = (props) => {
  const history = useHistory();
  const { setAdmin } = props;

  const [returnAdmin, setReturnAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReturnAdmin({ ...returnAdmin, [name]: value });
  };

  const logThePrincessIn = async (event) => {
    event.preventDefault();
    const admin = await login(returnAdmin);
    setAdmin(admin);
    setTimeout(() => {
      history.push("/dashboard");
    }, 200);
  };

  return (
    <Layout>
      <div className="Login">
        <h1 className="login-header">
          Welcome back, <span>Ashley! </span> Please Login{" "}
        </h1>
        <form className="signin-form" onSubmit={logThePrincessIn}>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Enter Email"
            value={returnAdmin.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Enter Password"
            value={returnAdmin.password}
            onChange={handleChange}
          />
          <button type="submit" className="login-button">
            Let's Go!
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
