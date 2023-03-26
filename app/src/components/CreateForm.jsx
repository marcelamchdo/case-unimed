import users from '../mock/users'
import {useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../database/api/services/UsersService'
import '../styles/PagesStyles/Update.scss';


const UpdateForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [permission, setPermission] = useState('Usuário')
  const [status, setStatus] = useState('Ativo')
  const params = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  // updateById(params.id, user)

  let user = users.find((i) => i.id === params.id)
  
  const newUser = {name, email, permission, status}
  const optionsImplementation = (object) => (
    <option
      key={object}
      value={object}
    >
      {object}
    </option>
  )
  const handleChange = async() => {
    user = newUser
    dispatch({type: 'CREATED', payload: true})
    await createUser(user)
    history.push('/users')
  }

  return (
    <div className='updateText'>
        <h1>Cadastrar usuário</h1>

      <form className='.updateForm'>
        <div>
          <label htmlFor="nome">
          Nome

          <input
            className="input-update"
            type="text"
            id="nome"
            placeholder="Informe seu nome"
            onChange={({target}) => setName(target.value)}
            />
          </label>
        </div>
      
        <div className="input-update">
          <label htmlFor="username">
            E-mail
          </label>
          <input
            className="input-update"
            type="text"
            id="username"
            placeholder="Informe seu e-mail"
            onChange={({target}) => setEmail(target.value)}
          />
      </div>
        
      
        <div>
          <label htmlFor="password">
            Senha
          </label>

          <input
            className="input-update"
            type="password"
            id="password"
            placeholder="Informe sua senha"
            
          />
      </div>

        <div>
        <label htmlFor="password">
          Confirme sua senha
        </label>

        <input
          className="input-update"
          type="password"
          id="checkPassword"
          placeholder="Informe sua senha"
        />
      </div>

      <div className="select-options">
        <div className="custom-select">
       <label >
          Permissão
        </label>

       <select name="permission"
        value={permission}
        onChange={({target}) => setPermission(target.value)}
        >
          {['Administrador', 'Usuário'].map((object) => optionsImplementation(object))}
        </select>
        </div>

        <div className="custom-select">
          <label>
              Status
          </label>

          <select name="status"
          value={status}
          onChange={({target}) => setStatus(target.value)}
          >
            {['Ativo', 'Inativo'].map((object) => optionsImplementation(object))}
    
          </select>
        </div>
      </div>

      <div className='custom-buttons'>
        <button 
        className='btnBack'
        type="button"
        onClick={() => history.push('/welcome')}
        
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Voltar
        </button>

        <button
          className="btnRegisterUser"
          type="button"
          onClick={handleChange}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
          Salvar
        </button>
      </div>

      </form>
    </div>
  )
}

export default UpdateForm;