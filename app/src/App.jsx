import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Login, Register, Users } from './pages';
import Welcome from './pages/Welcome';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/welcome" component={ Welcome } />
          <Route exact path="/users" component={ Users } />
          <Route exact path="/update/:id" component={ Update } />
      </Switch>
   </BrowserRouter>
  );
}

export default App;
