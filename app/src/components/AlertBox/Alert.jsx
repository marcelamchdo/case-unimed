import { useState } from 'react';

const AlertBox = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    // Handle delete logic
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Delete Item</button>
      {showAlert && (
        <div>
          <div>
            <p>Are you sure you want to delete?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={handleHideAlert}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};
