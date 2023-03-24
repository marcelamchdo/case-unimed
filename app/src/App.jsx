import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Login, Register } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={ Login } />
          <Route path="/register" Component={ Register } />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
