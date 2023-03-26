import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getAll} from '../database/api/services/UsersService'

const Users = () => {
  const [getUsers, setGetUsers] = useState([])
  const printUsers = async () => {
    const  data  = await getAll();
    console.log(data);
    setGetUsers(data);
  };
 useEffect(() => {printUsers()},[])

  
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
    <div>
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
            {getUsers?.map((object) => (
            <>
              <tr key={object.id}>{showUserProperty(object) }</tr>
              <Link key={`link-${object.id}`} to ={`/update/${object.id}`}>Editar</Link>
              <button
                onClick={() => setGetUsers(getUsers.filter((i) => i.id !== object.id)
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