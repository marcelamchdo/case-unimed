import RegisterForm from "../components/RegisterForm";
import React from 'react';
import background from '../images/back_login.png';
import '../styles/Register.scss';
import unimed from '../images/logo_unimed.png';

const Register = () => {
  return (
    <div className="register">
      <img src={background} className="background" alt="background"/>
      <div className="registerForm">
      <RegisterForm />
      <img src={unimed} className="unimed" alt="background"/>
      </div>
    </div>
  )
}

export default Register;
