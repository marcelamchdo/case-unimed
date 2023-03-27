import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import '../styles/ComponentsStyles/Form.scss';
import { useSelector } from 'react-redux';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();
  const message = useSelector(state => state.user.message)
  const enabled = () => password.length > 5 && validate(email)
  const handleHistory = () => {
    if(history !== undefined){
      history.push('/welcome')}
    }

  return (
    <div className='form'>
      <form>
        <h1>Login</h1>
        
        {message && <div className='messageUser'>
          {message}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>}

        <label 
        htmlFor="email"
        data-testid="email">
          E-mail
        </label>

        <input
          type="text"
          id="email"
          value={ email }
          placeholder="Informe seu e-mail"
          data-testid="email"
          onChange={({target}) => setEmail(target.value)}
        />

        <label htmlFor="password">
          Senha
        </label>

        <input
          type="password"
          id="password"
          value={ password }
          placeholder="Informe sua senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        
        <button 
          className="btnLogin"
          type="button"
          disabled={!enabled()}
          onClick={handleHistory}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Entrar
        </button>

        <button
        className="btnRegister" 
        type="button"
        onClick={() => history.push('/register')}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          Não tenho conta
        </button>
      </form>
    </div>
  )
}

export default LoginForm;