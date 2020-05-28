import React, { useState } from "react";
import logo from "../../assets/images/cmo_logo.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "./NavbarMain.css";

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function scrollToElement(evt) {
    let navbarHeight = document.getElementById("navbar").offsetHeight;
    let target = evt.target.getAttribute("data-target");
    let element = document.getElementById(target);
    window.scrollTo(0, element.offsetTop - navbarHeight);
  }

  return (
    <div className="NavbarMain" id="navbar">
      <div className="NavbarMain-container">
        <Navbar color="white" light expand="md">
          <NavbarBrand>
            <img
              className="logo"
              src={logo}
              alt="Logo"
              onClick={scrollToElement}
              data-target="welcome-page"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem onClick={isOpen ? toggle : ""}>
                <div
                  class="nav-link"
                  onClick={scrollToElement}
                  data-target="custom-product-statistics"
                >
                  Custom Product Statistics
                </div>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <div
                  class="nav-link"
                  onClick={scrollToElement}
                  data-target="commercial-inteligence"
                >
                  Commercial Intelligence
                </div>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <div
                  class="nav-link"
                  onClick={scrollToElement}
                  data-target="qc-pre-departure"
                >
                  QC Pre-Departure
                </div>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : ""}>
                <div
                  class="nav-link"
                  onClick={scrollToElement}
                  data-target="footer"
                >
                  Contact us
                </div>
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
