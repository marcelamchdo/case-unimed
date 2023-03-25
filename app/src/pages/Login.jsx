import LoginForm from "../components/LoginForm";
import React from 'react';
import background from '../images/back_login.png';
import './styles/Login.scss';


const Login = () => {
  return (
    <div className="login">
      <img src={background} className="background" alt="background"/>
      <div className="loginForm"> 
      <LoginForm />
      </div>
    </div>
  )
}

export default Login;