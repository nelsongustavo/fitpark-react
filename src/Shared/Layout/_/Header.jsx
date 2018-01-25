import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="header">
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="http://www.fitparkacademia.com.br/wp-content/themes/ovid/data/1330435782_Logomarca_fitPark.png" alt="Dispute Bills" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
    				<NavItem className="Button" eventKey={1} href="#">
    					COMPRE AGORA
    				</NavItem>
  			 </Nav>
       </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
