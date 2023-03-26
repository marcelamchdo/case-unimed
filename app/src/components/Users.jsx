import React from 'react'
import users from '../API/users'
import { Link } from 'react-router-dom'

const Users = () => {
  const showElements = (object) => {
    const keys = Object.keys(object)
    return(
        <div>
            {keys.map((key) => (
            <div>
              <div key={key.id}>{object[key]}</div>
            </div>
              
              ))}
        </div>
    )
  }
  return (
    <div>
      {users.map((object) => (
        <div>
          <div key={object.id}>{showElements(object) }</div>
          <Link to ={`/update/${object.id}`}>Editar</Link>
          <button>Deletar</button>
        </div>
        ))}
    </div>
  )
}

export default Users