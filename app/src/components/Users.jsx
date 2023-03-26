import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getAll, deleteById } from '../database/api/services/UsersService'

const Users = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const data = await getAll();
    setUsers(data);
  };
 useEffect(() => {getUsers()},[])

  
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
    await deleteById(object.id);
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