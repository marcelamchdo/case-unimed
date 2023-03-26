import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getAll, deleteById } from '../database/api/services/UsersService'

const Users = () => {
  const [users, setUsers] = useState([])

  const query = useSelector((state) => state.user.query)
  

  const getUsers = async () => {
    const data = await getAll();

    if (query.length > 0) {
      const queryUser = users.filter(({name, email}) => name.includes(query) || email.includes(query))
      setUsers(queryUser)
    } else {

    setUsers(data);
    }
  };

  useEffect(() => {getUsers()},[query])
  
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
    <div className='UsersForm'>
        <div>

          <table>
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
              <tr key={object.id}>{showUserProperty(object) }</tr>
              <Link key={`link-${object.id}`} to ={`/update/${object.id}`}>Editar</Link>
              <button
                onClick={() => handleDelete(object)}
              >Deletar</button>
              </>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Users