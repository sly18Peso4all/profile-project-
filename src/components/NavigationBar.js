import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';


 export default function NavigationBar ()  {
    return (
    <div> 
    <Nav
       activeKey="/home"
       onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
       >
       <Nav.Item>
           <Nav.Link href="/home">CV World</Nav.Link>
       </Nav.Item>
       <Nav.Item>
           <Nav.Link eventKey="link-1">Link</Nav.Link>
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

</div> 
    )
 }
      

 
