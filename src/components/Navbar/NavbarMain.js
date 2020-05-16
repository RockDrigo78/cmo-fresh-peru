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
    <div className="NavbarMain">
      <div className="NavbarMain-container">
        <Navbar color="white" light expand="md">
          <Link className="" to="/home">
            <NavbarBrand href="/">
              <img className="logo" src={logo} alt="Logo" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem onClick={isOpen ? toggle : ""}>
                <Link className="" to="/custom-product-statistics">
                  <NavLink>
                    <div>Custom Product</div>
                    <div>Statistics</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <Link className="" to="/commercial-inteligence">
                  <NavLink>
                    <div>Commercial</div>
                    <div>Intelligence</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <Link className="" to="/qc-pre-departure">
                  <NavLink>
                    <div>QC</div>
                    <div>Pre-Departure</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <Link className="" to="/contact-us">
                  <NavLink>Contact us</NavLink>
                </Link>
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
