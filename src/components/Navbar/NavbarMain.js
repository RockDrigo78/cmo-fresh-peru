import React, { useState } from "react";
import logo from "../../assets/images/cmo_logo.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";
import "./NavbarMain.css";

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarMain" id="navbar">
      <div className="NavbarMain-container">
        <Navbar color="white" light expand="md">
            <NavbarBrand href="/home#welcome-page">
              <img className="logo" src={logo} alt="Logo" />
            </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem onClick={isOpen ? toggle : ""}>
                  <NavLink href="/home#custom-product-statistics">
                    <div>Custom Product Statistics</div>
                  </NavLink>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                  <NavLink href="/home#commercial-inteligence">
                    <div>Commercial Intelligence</div>
                  </NavLink>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                  <NavLink href="/home#qc-pre-departure">
                    <div>QC Pre-Departure</div>
                  </NavLink>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                  <NavLink href="/home#footer">Contact us</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Visit us on...
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarMain;
