import React,{useState, } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e){
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
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
          value={username}
          placeholder="Informe seu e-mail"
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">
          Senha
        </label>

        <input
          type="password"
          id="password"
          value={password}
          placeholder="Informe sua senha"
          onChange={handlePasswordChange}
        />

        <button type="submit">
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
