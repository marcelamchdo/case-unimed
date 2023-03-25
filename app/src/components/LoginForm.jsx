import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useHistory, Redirect } from 'react-router-dom';
import '../styles/Form.scss';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LogEmail } from '../redux/actions';

const LoginForm = ({ loginEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  const history = useHistory();

  const message = useSelector(state => state.user.message)
  const enabled = () => password.length > 5 && validate(email)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form'>
      {redirect && <Redirect to="/admin" />}
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className='messageUser'>{message}</div>
        <label htmlFor="email">
          E-mail
        </label>

        <input
          type="text"
          id="email"
          value={ email }
          placeholder="Informe seu e-mail"
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
          onClick={ () => {
            loginEmail(email);
            setRedirect(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          Entrar
        </button>

        <button
        className="btnRegister" 
        type="button"
        onClick={() => history.push('/register')}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          Não tenho conta
        </button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loginEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (payload) => dispatch(LogEmail(payload))
})



// export default LoginForm;
export default connect(null, mapDispatchToProps)(LoginForm)
