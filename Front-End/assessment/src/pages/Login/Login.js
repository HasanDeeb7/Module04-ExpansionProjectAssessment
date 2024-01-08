import { useContext, useState } from "react";
import style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  }
  async function logIn() {
    console.log(credentials);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}user/signin`,
        { username: credentials.username, password: credentials.password }
      );
      if (response) {
        setUser(response.data);
        response.data.role === "creator"
          ? navigate("/dashboard")
          : navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={style.LoginContainer}>
      <div className={style.inputWrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className={style.loginInput}
          value={credentials.username}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputWrapper}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className={style.loginInput}
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button className={style.submitBtn} onClick={logIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
