import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import '../styles/Form.scss';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [checkPassword, setCheckPassword] = useState(''); 
  const [checkPasswordValid, setCheckPasswordValid] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validateName = () => {
    setNameValid(name.length > 3);
  };

  const validateEmail = () => {
    setEmailValid(validate(email));
  };

  const validatePassword = () => {
    setPasswordValid(password.length > 5 && password.length > 0);
  };

  const validateCheckPassword = () => {
    setCheckPasswordValid(password === checkPassword);
  };

   const enabled = () => nameValid && emailValid && passwordValid && checkPasswordValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enabled()) {
      history.push('/');
    }
  };

  const handleClick = () => {
    dispatch({type: 'SIGNUP', payload: 'Usuário cadastrado com sucesso!'})
    history.push('/')
  }


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>

        <label htmlFor="nome">
        Nome
        </label>

        <div className="input-group">
          <input
            className='inputRegister'
            type="text"
            id="nome"
            value={name}
            placeholder="Informe seu nome"
            onChange={({target}) => setName(target.value)}
            onBlur={validateName}
          />
          <span className='icon'>
          {name.length > 3 ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00995D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
          </span>
        </div>
      
        <label htmlFor="username">
          E-mail
        </label>
        <div className="input-group">
        <input
          className='inputRegister'
          type="text"
          id="username"
          value={email}
          placeholder="Informe seu e-mail"
          onChange={({target}) => setEmail(target.value)}
          onBlur={validateEmail}
        />
        <span className='icon'>
        {validate(email) ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00995D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
           </svg>
        )}
        </span>
      </div>
        
      
        <label htmlFor="password">
          Senha
        </label>

        <div className="input-group">
        <input
          className='inputRegister'
          type="password"
          id="password"
          value={password}
          placeholder="Informe sua senha"
          onChange={({target}) => setPassword(target.value)}
          onBlur={validatePassword}
        />
        <span className='icon'>
        {password > 5 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00995D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
        </span>
      </div>

        <label htmlFor="password">
          Confirme sua senha
        </label>

        <div className="input-group">
        <input
          className='inputRegister'
          type="password"
          id="checkPassword"
          value={checkPassword}
          placeholder="Informe sua senha"
          onChange={({target}) => setCheckPassword(target.value)}
          onBlur={validateCheckPassword}
        />
        <span className='icon'>
        {checkPassword === password && checkPassword.length > 0 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00995D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
        </span>
      </div>

        <button
          className="btnRegisterUser"
          type="button"
          disabled={!enabled()}
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
          Cadastrar
        </button>

        <button 
        className='btnBack'
        type="button"
        onClick={() => history.push('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Voltar
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;
