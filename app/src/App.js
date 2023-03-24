import React, { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" component={ Login } />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
