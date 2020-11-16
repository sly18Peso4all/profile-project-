import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {CardDeck, Nav} from "react-bootstrap";
import Profiles from './components/Profiles';
import Menu from './components/Menu';
import  FilteredProfiles from './components/FilteredProfiles';
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

      <div className="App">
          <Menu />
          <Router>
              <Nav>

                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/">All Profiles</Link>
                  </Nav.Link>
              <Nav.Link>
                  <Link className="btn-sm btn-secondary" to="/profile/Html">HTML</Link>
              </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/CSS">CSS</Link>
                  </Nav.Link>
                    <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/Javascript">JavaScript</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/React">React</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/GitHub">GitHub</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/wordpress">Wordpress</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/php">PHP</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/SQL">SQL</Link>
                    </Nav.Link>
                  <Nav.Link>
                      <Link className="btn-sm btn-secondary" to="/profile/Python">Python</Link>
                    </Nav.Link>
                </Nav>


                  <Route exact path="/">
                      <CardDeck>
                          <Profiles data={users}/>
                      </CardDeck>
                  </Route>
                  <Route path="/profile/:skill">
                      <CardDeck>
                          <FilteredProfiles data={users}/>
                      </CardDeck>
                  </Route>
          </Router>

          </div>

    </>
  );
}

