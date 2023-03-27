import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavAdmin from "../components/NavAdmin";
import Sidebar from "../components/SiderbarAdmin";
import Users from "../components/Users";
import "../styles/PagesStyles/Users.scss"

const UsersAdmin = () => {
  const [query, setQuery] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()
  const created = useSelector(state => state.user.created)

  const handleSearch = (value) => {
    setQuery(value)
    dispatch({type: 'QUERY', payload: value})
  }

  return (
    <div className="welcome">
      <div className="sidebarAdmin">
        <Sidebar />
      </div>
      <div className="columnWelcome">
        <NavAdmin />
        <div className="created">
          {created && <p>Usuário atualizado/cadastrado com sucesso</p>}
        </div>
        <div className="usersHeader">
          <h1 className="usersText">
            Usuários
          </h1>

          <div className="searchBox">
            <span className="feather2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DADADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input 
            className="searchInput"
            placeholder="Buscar usuário"
            value={query}
            onChange={({target}) => handleSearch(target.value)}
            />

          <button 
          className="btnAddUser"
          onClick={() => history.push('/create')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            Adicionar usuário
          </button>
          </div>
        </div>
        <Users />
      </div>
    </div>
  )}

export default UsersAdmin