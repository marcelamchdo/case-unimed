import React from 'react'
import users from '../API/users'

const Users = () => {
  const showElements = (object) => {
    const keys = Object.keys(object)
    return(
        <div>
            {keys.map((key) => (<div key={key.id}>{object[key]}</div>))}
        </div>
    )
  }
  return (
    <div>
      {users.map((object) => (
        <div key={object.id}>{showElements(object)}</div>
        ))}
    </div>
  )
}

export default Users