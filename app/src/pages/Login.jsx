import LoginForm from "../components/LoginForm";
import React from 'react';
import background from '../images/back_login.png';
import '../styles/Login.scss';
import unimed from '../images/logo_unimed.png';


const Login = () => {
  return (
    <div className="login">
      <img src={background} className="background" alt="background"/>
      <div className="loginForm"> 
      <LoginForm />
      <img src={unimed} className="unimed" alt="background"/>
      </div>

    </div>
  )
}

export default Login;