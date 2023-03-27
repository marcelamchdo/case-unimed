import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import '../styles/ComponentsStyles/Form.scss';
import { useDispatch } from 'react-redux';
import { valid, invalid } from '../images/svgs'

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(''); 
  const dispatch = useDispatch();
  const history = useHistory();

  const sendToReducer = {name, email, message: 'Usuário cadastrado com sucesso!'};
  const enabled = () => name.length > 3 && validate(email) && password === checkPassword;

  const handleSubmit = () => {
    if (enabled()) {
      history.push('/');
    }
  };

  const handleClick = () => {
    dispatch({type: 'SIGNUP', payload: sendToReducer})
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
          />
          <span className='icon'>
           {name.length > 3 ? valid() : invalid()}
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
        />
        <span className='icon'>
        {validate(email) ? valid() : invalid()}
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
        />
        <span className='icon'>
        {password > 5 ? valid() : invalid()}
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
        />
        <span className='icon'>
        {checkPassword === password && checkPassword.length > 0 ?  valid() : invalid()}
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
