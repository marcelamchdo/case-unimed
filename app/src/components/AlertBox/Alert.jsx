import { useState } from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    // handle delete logic here
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <>
          <div className="overlay" onClick={handleHideAlert} />
          <div className="alert">
            <p>Tem certeza que deseja deletar?</p>
            <button onClick={handleDelete}>Sim</button>
            <button onClick={handleHideAlert}>Não</button>
          </div>
        </>
      )}
    </>
  );
};
