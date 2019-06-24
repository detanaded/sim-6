import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import {HashRouter} from 'react-router-dom'
import router from './routes'

function App() {
  return (
      <HashRouter>
      <Nav/>
      {router}
      </HashRouter>
  );
}

export default App;
