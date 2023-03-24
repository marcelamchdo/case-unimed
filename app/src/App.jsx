import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ Login } />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
