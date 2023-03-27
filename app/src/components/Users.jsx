import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {getAll, deleteById } from '../database/api/services/UsersService'
import "./AlertBox/Alert.css"

const Users = () => {
  const [users, setUsers] = useState([])  
  const [showAlert, setShowAlert] = useState(false)
  const [id, setId] = useState('')
  const query = useSelector((state) => state.user.query)
  const [showOverlay, setShowOverlay] = useState(false)
  
  const getUsers = async () => {
    const data = await getAll();

    if (query?.length > 0) {
      const queryUser = users.filter(
        ({name, email}) => name.includes(query) || email.includes(query))
      setUsers(queryUser)
    } else {
    setUsers(data);
    }
  };

  useEffect(() => {
    getUsers()
  }, [query, users])
  
  const showUserProperty = (object) => {
    const keys = Object.keys(object)
    return(
        <>
          {keys.map((key, index) => index < 4 && (
            <tr className="trUsers" key={key.id}>{object[key]}</tr>
          ))}
        </>
    )
  }

  const Alert = () => {
    return (
      <div className="overlay">
      <div className="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ED752D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

        <p className="message">Tem certeza que deseja deletar?</p>

        <div className='btnAlert'>
          <button className="btnDelete" onClick={() => handleDelete()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
           <p>Sim, excluir usuário!</p> 
          </button>

          <button className="btnCancel" onClick={() => setShowAlert(false)}>
            <p>Cancelar</p>
          </button>
        </div>
        </div>
      </div>
    );
  };
  

const handleDelete = async () => {
    setUsers(users.filter((i) => i.id !== id))
    await deleteById(id);
    setShowAlert(false)
}


  return (
    <div>
      <div className='alertBox'>
      {showAlert && Alert()}
      </div>
        
      <table className="tableContainer">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Permissão</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody data-testid="tbody-users">
        {users?.map((object) => (
          <tr data-testid="trUsers">
            <td key={object.id} className="tableRow">{showUserProperty(object) }

            <div className="btnUsers">
              <Link 
              key={`link-${object.id}`} 
              to ={`/update/${object.id}`}
              className="editBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </Link>

              <button
                onClick={() =>{ setShowAlert(true); setId(object.id)}}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#898989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
              </div>
            </td>
          </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Users