import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };
  return (
    <div className='login'>
      <h1>Login</h1>
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={handleChange}
        placeholder='Enter your email'></input>
      <input
        type='password'
        name='password'
        value={user.password}
        onChange={handleChange}
        placeholder='Enter your password'></input>
      <div className='button' onClick={login}>
        Login
      </div>
      <div>Or</div>
      <div className='button'>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Login;
