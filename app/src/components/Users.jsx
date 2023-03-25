import React from 'react'
import users from '../API/users'

const Users = () => {
  const showElements = (object) => {
    const keys = Object.keys(object)
    return(
        <div>
            {keys.map((key, index) => (<div key={index}>{object[key]}</div>))}
        </div>
    )
  }
  return (
    <div>
      {users.map((object) => (showElements(object)))}
    </div>
  )
}

export default Users