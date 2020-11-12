import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {CardDeck, Nav} from "react-bootstrap";
import Profile from './components/Profile';
import Menu from './components/Menu'
import  NavigationBar from './components/NavigationBar'
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

          <Router>
              <Nav>
              <Nav.Item>
                  <Nav.Link exact href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="/profile">HTML</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                      Disabled
                  </Nav.Link>
              </Nav.Item>
          </Nav>
              <Switch>
                  <Route exact path="/">
                      <App />
                  </Route>
                  <Route path="/profile/:id">
                      <CardDeck>{users.map(user => <Profile profileValue={user.fields} />)}</CardDeck>
                  </Route>
              </Switch>
          </Router>


<Menu />


          </div>
    
  );
}

