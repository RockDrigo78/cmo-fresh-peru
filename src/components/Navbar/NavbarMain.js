import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cmo_logo.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./NavbarMain.css";

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarMain">
      <Navbar color="white" light expand="md">
        <Link className="" to="/">
        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="" to="/services">
                <NavLink>
                  Services
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="" to="/prices">
                <NavLink>
                  Prices
                </NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More...
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>CMO Fresh Peru: 01 232-2332332</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
