import React from 'react';
import logo from './logo.svg';
import {Outlet} from "react-router-dom";

import './App.css';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  );
}


export default App;
