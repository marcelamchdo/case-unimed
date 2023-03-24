import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, Register } from './pages';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
      </Switch>
   </div>
  );
}

export default App;
