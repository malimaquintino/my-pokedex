import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Pokedex from './pages/pokedex/';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path='/' component={Pokedex} />
    </Router>
  );
}

export default App;
