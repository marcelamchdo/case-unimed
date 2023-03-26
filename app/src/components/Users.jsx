import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getAll, deleteById } from '../database/api/services/UsersService'

const Users = () => {
  const [users, setUsers] = useState([])
  
  const query = useSelector((state) => state.user.query)
  
  const getUsers = async () => {
    const data = await getAll();

    if (query?.length > 0) {
      const queryUser = users.filter(({name, email}) => name.includes(query) || email.includes(query))
      setUsers(queryUser)
    } else {

    setUsers(data);
    }
  };


  useEffect(() => {getUsers()}, [query, users])
  
  const showUserProperty = (object) => {
    const keys = Object.keys(object)
    return(
        <>
            {keys.map((key, index) => index < 4 && (
              <tr key={key.id}>{object[key]}</tr>
              ))}
        </>
    )
  }

  const handleDelete = async (object) => {
    setUsers(users.filter((i) => i.id !== object.id))
    const confirmDelete = window.confirm("Deseja realmente excluir o usuário?") 
    if (confirmDelete) {
      await deleteById(object.id);
    }
  }

  return (
    <div>
        <div>
          <table className="tableContainer">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Permissão</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
            {users?.map((object) => (
            <>
              <td key={object.id} className="tableRow">{showUserProperty(object) }
              
              <div className='btnUsers'>
              <Link 
              key={`link-${object.id}`} 
              to ={`/update/${object.id}`}
              className="editBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </Link>

              <button
                onClick={() => handleDelete(object)}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
              </div>
              </td>

              
              </>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Users