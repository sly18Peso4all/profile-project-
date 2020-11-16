import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {CardDeck, Nav} from "react-bootstrap";
import Profile from './components/Profile';
import Menu from './components/Menu';
import  FilteredProfile from './components/FilteredProfile';
import {BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

let contentful = require('contentful')

let client = contentful.createClient({
    space: 'qylnzaqla1yd',
    accessToken: 'e9ynq4JKVQCnX08LfMSpA_7OYMLfYpqihfmlyKQHuZc'
})


export default function App() {


    let [users, setUsers] = useState([])
    let [skill, setSkill] = useState("")

    useEffect(async ()=> {
        const response = await client.getEntries()
        setUsers(response.items)
        console.log(response.items)
    },[])

    return (
        <>
        {users.map((r)=>
      <div className="App">
          <Menu />
          <Router>
              <Nav>
              <Nav.Item>
                  <Nav.Link>
                      <Link to="/">Home</Link>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link>
                  <Link to={`/profile/${r.fields.skills_.sort(function(a, b){return a - b})[2]}`}>HTML</Link>
                  </Nav.Link>
              </Nav.Item>
                  <Nav.Item>
                  <Nav.Link>
                      <Link to={`/profile/${r.fields.skills_.sort(function(a, b){return a - b})[0]}`}>CSS</Link>
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link>
                      <Link to={`/profile/${r.fields.skills_.sort(function(a, b){return a - b})[1]}`}>JavaScript</Link>
                  </Nav.Link>
              </Nav.Item>
          </Nav>
                  <Route exact path="/">
                      <CardDeck>
                          <Profile data={users}/>
                      </CardDeck>
                  </Route>
                  <Route path="/profile/:skill">
                      <CardDeck>
                          <FilteredProfile data={users}/>
                      </CardDeck>

                  </Route>
          </Router>


          </div>
        )}
    </>
  );
}

