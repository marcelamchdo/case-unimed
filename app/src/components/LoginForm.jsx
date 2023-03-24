import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import './styles/LoginForm.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const enabled = () => password.length > 5 && validate(email)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <label htmlFor="email">
          E-mail
        </label>

        <input
          type="text"
          id="username"
          value={email}
          placeholder="Informe seu e-mail"
          onChange={({target}) => setEmail(target.value)}
        />

        <label htmlFor="password">
          Senha
        </label>

        <input
          type="password"
          id="password"
          value={password}
          placeholder="Informe sua senha"
          onChange={({target}) => setPassword(target.value)}
        />

        <button 
          type="button"
          disabled={!enabled()}
        >
          Entrar
        </button>

        <button 
        type="button"
        onClick={() => history.push('/register')}
        >
          Não tenho conta
        </button>
      </form>
    </div>
  )
}

export default LoginForm;
