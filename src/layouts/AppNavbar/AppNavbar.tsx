import {
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Collapse,
  Button,
} from "reactstrap";
import { useState } from "react";

export const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">React Library App</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Search Books</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Button color="primary">Sign In</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
