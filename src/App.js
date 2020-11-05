import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
      <div className="App">
        <Profile />
      </div>
   </Router> 
    
  );
}

export default App;
