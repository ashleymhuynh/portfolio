import { useState } from "react";
import { login } from "../../services/admin";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Login.css";

const Login = (props) => {
  const history = useHistory();
  const { setAdmin } = props;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const logTheQueenIn = async (event) => {
    event.preventDefault();
    const signInAdmin = async () => {
      const admin = await login(form);
      setAdmin(admin);
      setTimeout(() => {
        history.push("/projects");
      }, 200);
    };
    signInAdmin();
  };

  return (
    <Layout admin={props.admin}>
      <div className="Login">
        <h1>Welcome back, Ashley! Please Login </h1>
        <form className="signin-form" onSubmit={logTheQueenIn}>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Let's Go!</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
