const UpdateForm = () => {
  return (
    <div className='updateForm'>
      <form >
        <h1>Atualizar usuário</h1>

        <label htmlFor="nome">
        Nome
        </label>

        <div className="input-group">
          <input
            type="text"
            id="nome"
            placeholder="Informe seu nome"
          />
        </div>
      
        <label htmlFor="username">
          E-mail
        </label>
        <div className="input-group">
        <input
          className='inputRegister'
          type="text"
          id="username"
          placeholder="Informe seu e-mail"
        />
      </div>
        
      
        <label htmlFor="password">
          Senha
        </label>

        <div className="input-group">
        <input
          className='inputRegister'
          type="password"
          id="password"
          placeholder="Informe sua senha"
        />
      </div>

        <label htmlFor="password">
          Confirme sua senha
        </label>

        <div className="input-group">
        <input
          className='inputRegister'
          type="password"
          id="checkPassword"
          placeholder="Informe sua senha"
        />
      </div>

      <label >
          Permissão
      </label>

      <select name="permission">
        <option value="administrador">Administrador</option>
        <option value="usuario">Usuário</option>
      </select>

      <label>
          Status
      </label>

      <select name="status">
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
      </select>

        <button 
        className='btnBack'
        type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Voltar
        </button>

        <button
          className="btnRegisterUser"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
          Salvar
        </button>

      </form>
    </div>
  )
}

export default UpdateForm;