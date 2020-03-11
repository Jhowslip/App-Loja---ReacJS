import React from 'react';
import './style.css';
import api from './services/api';

import Header from './components/Header';
import Main from './pages/main';



const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
