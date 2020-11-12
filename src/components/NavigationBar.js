import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';


 export default function NavigationBar ()  {
    return (
    
    <div>        
    <Nav
       activeKey="/"
       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
       >
       <Nav.Item>
          <Link to="/">CV World</Link>
       </Nav.Item>
       <Nav.Item>
          <Link to="/html">HTML</Link>
           
       </Nav.Item>
       <Nav.Item>
       <Link to="/css">CSS</Link>
       </Nav.Item>
       <Nav.Item>
          <Link to="/JavaScript">JavaScript</Link>
       </Nav.Item>
   </Nav>
   </div>

    )
 }
      
