import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, Register, Users } from './pages';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/users" component={ Users } />
      </Switch>
   </div>
  );
}

export default App;
