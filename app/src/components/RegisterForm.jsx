import React, { useState } from 'react';
import { validate } from 'email-validator';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const enabled = () => name.length > 3 && password.length > 5 && validate(email) && password === checkPassword

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
        Nome
        </label>

        <input
          type="text"
          id="nome"
          value={name}
          placeholder="Informe seu nome"
          onChange={({target}) => setName(target.value)}
        />
      
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

        <label htmlFor="password">
          Confirme sua senha
        </label>

        <input
          type="password"
          id="password"
          value={checkPassword}
          placeholder="Informe sua senha"
          onChange={({target}) => setCheckPassword(target.value)}
        />

        <button 
          type="button"
          disabled={!enabled()}
        >
          Cadastrar
        </button>

        <button type="submit">
          Voltar
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;
