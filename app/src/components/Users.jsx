import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getAll} from '../database/api/services/UsersService'

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
            {keys.map((key) => (
              <tr key={key.id}>{object[key]}</tr>
              ))}
        </>
    )
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
                onClick={() => setUsers(users.filter((i) => i.id !== object.id)
                  )}
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