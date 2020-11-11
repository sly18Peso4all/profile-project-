import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {CardDeck} from "react-bootstrap";
import Profile from './components/Profile';
import Menu from './components/Menu'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let contentful = require('contentful')

let client = contentful.createClient({
    space: 'qylnzaqla1yd',
    accessToken: 'e9ynq4JKVQCnX08LfMSpA_7OYMLfYpqihfmlyKQHuZc'
})

export default function App() {

    let [users, setUsers] = useState([])

    useEffect(async ()=> {
        const response = await client.getEntries()
        setUsers(response.items)
    console.log(response.items)
    },[])



    return (
      <div className="App">
<Menu />
          <CardDeck>{users.map(user => <Profile profileValue={user.fields} />)}</CardDeck>

          </div>
    
  );
}

