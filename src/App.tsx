import React from 'react';
import "./styles/app.scss"

import Chat from './pages/chat';
import Router from './router/router';

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
