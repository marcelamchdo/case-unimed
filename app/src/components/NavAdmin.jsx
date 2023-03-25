import '../styles/NavAdmin.scss';

const NavAdmin = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('pt-BR', options);
  return (
    <div className="navAdmin">
      

    <div>
      <h1>Bem vindo usuário</h1>
      <p>{date}</p>
    </div>
    

  
    <div>
      <p>Lupa</p>
      <div>Email</div>
      <div>Foto</div>
    </div>
    
    </div>
  )
}

export default NavAdmin