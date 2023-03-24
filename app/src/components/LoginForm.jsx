import React,{useState, } from 'react';
import { validate } from 'email-validator';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enabled = () => password.length > 5 && validate(email)

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
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

        <button type="submit">
          Não tenho conta
        </button>
      </form>
    </div>
  )
}

export default LoginForm;
